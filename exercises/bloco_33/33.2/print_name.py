name = input("Informe o nome: ")
name_size = len(name)
initial_letter = 0
while name_size > 0:
    print(name[initial_letter:name_size])
    name_size -= 1
