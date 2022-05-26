def max_length_name(list_names):
    size_name = 0
    size_max_name = ''
    for name in list_names:
        if len(name) > size_name:
            size_name = len(name)
            size_max_name = name
    return size_max_name


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(max_length_name(names))
