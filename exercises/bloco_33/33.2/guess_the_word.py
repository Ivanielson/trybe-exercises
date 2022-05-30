import random


def guess_the_word(list_words):
    word_drawn = random.choice(list_words)
    scrambled_word = "".join(random.sample(word_drawn, len(word_drawn)))
    print(scrambled_word)
    palpite = input("Digite seu palpite, qual a palavra? ")
    if palpite == word_drawn:
        print(f"Parabéns! você ganhou, a palavra era: {word_drawn}")
    else:
        print(f"Que pena! você errou, a plavra correta é: {word_drawn}")


if __name__ == "__main__":
    with open("words.txt", "r") as file:
        words = file.read().split()
    guess_the_word(words)
