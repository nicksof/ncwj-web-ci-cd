for i in range(1, 101):
    if i % 2 == 0:
        print("Fizz")
    if i % 4 == 0:
        print("Buzz")
    if i % 4 != 0 and i % 3 != 0:
        print("FizzBuzz")
        