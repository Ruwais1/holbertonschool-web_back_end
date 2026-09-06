#!/usr/bin/env python3
"""
Contains a helper function for pagination math
"""
from typing import Tuple

def indexrange(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple of size two containing a start index and an end index
    corresponding to the range of indexes to return in a list for those
    particular pagination parameters.
    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.
    Returns:
        Tuple[int, int]: A tuple containing the start index and end index.
    """
    if page < 1 or page_size < 1:
        raise ValueError("Page and page_size must be positive integers.")
    
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)