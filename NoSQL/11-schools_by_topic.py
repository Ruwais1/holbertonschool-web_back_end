#!/usr/bin/env python3
"""
Where can i learn python?
"""


def school_by_topics(mongo_collection, topic):
    """
    Return the list of school have a specific topic
    """
    return list(mongo_collection.find({ "topics": topic }))
