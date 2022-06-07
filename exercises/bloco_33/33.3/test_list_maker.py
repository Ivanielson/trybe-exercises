from list_number import list_maker
import pytest


@pytest.fixture
def list_whith_three():
    return [1, 2, "Fizz"]


@pytest.fixture
def list_whith_five():
    return [1, 2, "Fizz", 4, "Buzz"]


@pytest.fixture
def list_whith_fifteen():
    return [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def tests_with_a_string_if_an_exception_is_returned_with_an_error_message():
    with pytest.raises(TypeError, match="Invalid value, value is not an int"):
        list_maker("3")


def test_list_with_three_numbers_returns_the_expected(list_whith_three):
    assert list_maker(3) == list_whith_three


def test_list_with_five_numbers_returns_the_expected(list_whith_five):
    assert list_maker(5) == list_whith_five


def test_list_with_fifteen_numbers_returns_the_expected(list_whith_fifteen):
    assert list_maker(15) == list_whith_fifteen
