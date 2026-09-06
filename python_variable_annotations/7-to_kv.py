#!/usr/bin/env python3
"""
Module that provides a type-annotated function to_kv.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string k and an int OR float v and returns a tuple.
    The first element is the string k, and the second is the square of v.
    """
    return (k, v ** 2)
