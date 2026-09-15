#!/usr/bin/env python3

def insert_school(mongo_collection, **kwargs):
    """
    inserts a new document in a collcection based on kwargs
    """
    
mongo_collection.insert_one(kwargs)
return mongon_collection.insert_one(kwargs).inserted_id
