#!/usr/bin/env python3
"""
Module that provides a type-annotated function make_multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float multiplier and returns a function that multiplies a float
    by the multiplier.
    """
    def multiply(n: float) -> float:
        return n * multiplier
    
    return multiply
