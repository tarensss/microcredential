"""
Python and Postgresql Exercises
Student's Name:

"""

import math



#A
lit = []
user  = int(input("Enter the number of fruits: "))

for i in range(0,user):
    lit.append(input("fruit: "+str(i+1)+" "))

  

print('User created a loist of 3 items and enterd the values: ', lit)






#B

# Nesting while loop and if-else statement: write a Python program that uses while
# loop to print all the numbers (between two numbers exclusive).
us  = int(input("Enter number 1 : "))
u = int(input("Enter number 2 : "))

while u < us:
    u += 1
    print(u)






#C

radius = int(input("Enter the radius: "))
height = int(input("Enter the height: "))
volume = (math.pi * radius * radius * height)
print ('The volume with radius ', radius, ' and height ', height, ' is ', volume)




# D 
import random
roll = int(input('How many times do you want to roll?'))

for i in range(roll):
    print("Roll   ", i+1, ": ", random.randint(1,6))
    


'''




