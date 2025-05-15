#!/usr/bin/env python3
 
import csv
import math
from typing import Dict, Any
from task_1 import Server

class Server(Server):

    def get_hyper(self, page: int = 1, page_size: int = 10, data=None) -> Dict[str, Any]:
        data = self.get_page(page, page_size)
        total_pages = math.ceil((len(self.dataset())) / page_size)
        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }

# server = Server()

# print(server.get_hyper(1, 2))
# print("---")
# print(server.get_hyper(2, 2))
# print("---")
# print(server.get_hyper(100, 3))
# print("---")
# print(server.get_hyper(3000, 100))
