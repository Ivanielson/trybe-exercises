def total_ink_price(wall_size):
    size_per_liter = wall_size / 3
    can_counter = size_per_liter / 18
    total_price = can_counter * 80
    return (f"Qt. Latas: {can_counter:.2f}", f"Total: R$ {total_price:.2f}")


print(total_ink_price(162))
