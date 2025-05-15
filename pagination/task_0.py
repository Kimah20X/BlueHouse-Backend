#!/usr/bin/env python3

def index_range(page: int, page_size: int) -> tuple:
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)

# res = index_range(1, 7)
# print(type(res))
# print(res)

# res = index_range(page=3, page_size=15)
# print(type(res))
# print(res)

export = index_range(1, 10)
