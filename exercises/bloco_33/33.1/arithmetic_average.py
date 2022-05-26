import math


def arithmetic_average(list_number):
    sum_list = math.fsum(list_number)
    average = sum_list / len(list_number)
    return average


numbers = [5, 10, 33, 9, 20]

print(arithmetic_average(numbers))
