from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import boto3
import os
from langchain_community.chat_models import BedrockChat
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings

# Setup FastAPI
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify Vercel URL for stricter rules
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class QueryRequest(BaseModel):
    message: str
    session_id: str = None

# Load vector store and embedder
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)

# Initialize Bedrock client
boto3_bedrock = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1",  # update to your region
)

llm = BedrockChat(
    client=boto3_bedrock,
    model_id="anthropic.claude-v2",  # make sure you have access
    model_kwargs={"temperature": 0.0}
)

# Build QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(),
    return_source_documents=False
)

@app.post("/query")
async def query(req: QueryRequest):
    try:
        result = qa_chain.run(req.message)
        return {"response": result}
    except Exception as e:
        return {"error": str(e), "response": "Something went wrong"}
