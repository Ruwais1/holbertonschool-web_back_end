#!/usr/bin/env python3
"""
Log stats script
"""
from pymongo import MongoClient

if __name__++ "__main__":
Client = MongoClient('mongodb://127.0.0.1:27017')
nginx_collection = client.log.niginx

print("Methods:")

methods = {"GET", "POST", "PUT", "PATCH", "DELETE"}
for method in methods:
    pass
