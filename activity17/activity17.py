
# TYPE NAME ACTIVITY 17
"""
MULTIPLE 
LINE COMMENT S
"""




#List

from dis import code_info


fruits = ["apples", "oranges", "bananas", "pears","grapes,mangos","cherries"]
print(fruits)
copyfruits = fruits.copy()
copyfruits.reverse()
copyfruits.append("grapes")
print("original list: %s \n copy list %s" %(fruits,copyfruits))
numgrapes = copyfruits.count("grapes")
numkiwi = copyfruits.count("kiwi")
indexPears = fruits.index('')
print("There are ", numgrapes, "grapes in the list")
print("There are ", numkiwi, "kiwi in the list")
print("pears is at index ", indexPears)

# STRING 
from numpy import full


msg = input("Enter a message: ")
fullname = input("Enter your full name: ")
print("%s welcoem %s" %(msg,fullname))
charName = len(fullName)
lastCharName = fullName(charName-1)
print("Name  %s has %s character and the last character is: %s"
      %(fullName,charName,lastCharName))
print("Name  %s has letter a with index %s" %(fullName, index_a))







# VARIABLES 
NUMBER1  = -30
NUMBER2 = 15.6
ADDITTION = NUMBER1 + NUMBER2
NAME = "TYPE YOU NAME"
CHARACTER = 'T'


# BOOLEAN FOR LATER
NO_YES = False
print("NUMBER 1 =  ", NUMBER1)


#INPUT () FUNCTION 
FIRSTNAME = input("ENTER A NAME: ")
print("welcome to the program:", FIRSTNAME)

# casting from string to integer
num1 = input("Enter a number:  ")
num1 = int (num1)
num2 = input("Enter a 2nd number: ")
prod = num1 * num2
print("The Product of", num1,"and",num2,"is",prod)

# Example 1  find the hypotunse of a right abgle 
h = float(input("Enter the height: "))
w = float(input("Enter the weight"))
hyp = (h**2+w**2)**0.5
print("The hypotunese USE ",hyp)


































