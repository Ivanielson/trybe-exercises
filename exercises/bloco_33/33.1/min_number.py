def min_number(list_number):
    smallest_number = list_number[0]
    for num in list_number:
        if num < smallest_number:
            smallest_number = num
    return smallest_number


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(min_number(numbers))
