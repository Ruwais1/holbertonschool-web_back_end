#!/usr/bin/env python3
"""
Module that contains an asynchronous coroutine async_generator.
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Loops 10 times, waits 1 second each time, and yields a random float
    between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
