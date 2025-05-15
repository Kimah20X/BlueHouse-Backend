#!/usr/bin/env python3
 
import csv
import math
from typing import List
from task_0 import index_range

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Name.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
            assert isinstance(page, int) and  page > 0 
            assert isinstance(page_size, int)and page_size > 0

            start, end = index_range(page, page_size)
            dataset = self.dataset()
            if start >= len(dataset):
                return []
            return dataset[start:end]

# server = Server()
# try:
#     should_err = server.get_page(-10, 2)
# except AssertionError:
#     print("AssertionError raised with negative values")

# try:
#     should_err = server.get_page(0, 0)
# except AssertionError:
#     print("AssertionError raised with 0")

# try:
#     should_err = server.get_page(2, 'Bob')
# except AssertionError:
#     print("AssertionError raised when page and/or page_size are not ints")

# print(server.get_page(1, 3))
# print(server.get_page(3, 2))
# print(server.get_page(3000, 100))
