from star_wars import Jedi, Soldier


soldier = Soldier(10)
jedi = Jedi(100)


def test_class_soldier():
    assert soldier.level == 10
    assert soldier.attack() == 10


def test_class_jedi():
    assert jedi.level == 100
    assert jedi.attack() == 1000
