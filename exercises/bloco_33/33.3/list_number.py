def list_maker(num):
    if type(num) != int:
        raise TypeError("Invalid value, value is not an int")
    new_list = []
    for index in range(1, num + 1):
        if index % 3 == 0 and index % 5 == 0:
            new_list.append("FizzBuzz")
        elif index % 3 == 0:
            new_list.append("Fizz")
        elif index % 5 == 0:
            new_list.append("Buzz")
        else:
            new_list.append(index)
    return new_list
