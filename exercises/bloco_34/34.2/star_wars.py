from abc import ABC, abstractmethod


class Character(ABC):
    @classmethod
    @abstractmethod
    def attack(self):
        raise NotImplementedError


class Soldier(Character):
    @classmethod
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi(Character):
    @classmethod
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100

    def attack(self):
        return self.level * 10


class StarWarsGame:
    def __init__(self, character: Character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
