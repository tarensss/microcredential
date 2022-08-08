"""

activity 19: functions 
Type your name


"""

import math
import random





# example 8) pass statement 
def filter_num():
    pass

# example 7) Boolean functions
def is_divisible (x,y):
    print("-- EXAMPLE 7")
    if x%y == 0 or y%x ==0: 
        return True
    else:
        return False

#example 6) def function with parameters and return value
def sum (num1, num2):
    total =  numl+num2
    return total

def number ():
    print("-- EXAMPLE 6")
    nl=int (input ("Enter number 1: ")) 
    n2= int(input ("Enter number 2: "))
    x = sum (nl, n2)
    print ("The sum of s and s is ts" (ni,n2, x))


#example 5) defined function with default parameter and no return value
def country (c="Norway"):
    print ("I am from %s" ())


# example 4) defined function with parameter and no return value
def name (fname):
    print ("--- EXAMPLE 4")
print ("Welcome to the program: %s" % (fname))

#example 3) defined function: no parameter nor return value
def my_function():
    print("-- EXAMPLE 3")
    print ("Hello from a function!\n")

#example 2) random numbers. Randomly pick a color from a list
print ("EXAMPLE 2 -----")
color=['red', 'blue', 'green'] 
randomIndex = random.randint (0,2)
print ("The picked color is: %s" % (color[randomIndex]))

# example 1) using built-in function math to calculate the circumference given the radius
print ("-- EXAMPLE 1") 
radius = float (input ("Enter a radius: "))
circumference =2*math.pi*radius
circumference = round(circumference, 2)
area = math.floor (math.pow(radius, 2) *math.pi)
print ("The circumference with radius ts is is and the area is %s" % (radius, circumference,area))  
