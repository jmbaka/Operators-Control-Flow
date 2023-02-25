## Assignment
1.  **List the symbols for each of the below Javascript operators: Arithmetic Operators, Assignment Operators,Comparison Operators, Logical Operators, Bitwise Operators**
2. **For each JavaScript Operator, write 2 examples**

### Answers
* Arithmetic Operators
Addition: +
Example: 2 + 3 returns 5
Subtraction: -
Example: 6 - 4 returns 2
Multiplication: *
Example: 3 * 4 returns 12
Division: /
Example: 10 / 2 returns 5
Modulus: %
Example: 5 % 2 returns 1

* Assignment Operators:
Assignment: =
Example: let x = 5 assigns the value 5 to the variable x
Addition assignment: +=
Example: x += 2 is equivalent to x = x + 2

* Comparison Operators:
Equal to: ==
Example: 5 == "5" returns true
Greater than: >
Example: 10 > 5 returns true
Less than: <
Example: 2 < 8 returns true
Not equal to: !=
Example: 5 != 3 returns true
Greater than or equal to: >=
Example: 5 >= 5 returns true
Less than or equal to: <=
Example: 4 <= 6 returns true

* Logical Operators:
Logical AND: &&
Example: (5 > 3) && (10 < 15) returns true
Logical OR: ||
Example: (5 > 10) || (3 < 7) returns true
Logical NOT: !
Example: !(5 == 5) returns false

* Bitwise Operators:
Bitwise AND: &
Example: 5 & 3 returns 1 (in binary: 101 & 011 = 001)
Bitwise OR: |
Example: 5 | 3 returns 7 (in binary: 101 | 011 = 111)
Bitwise XOR: ^
Example: 5 ^ 3 returns 6 (in binary: 101 ^ 011 = 110)
Bitwise NOT: ~
Example: ~5 returns -6 (in binary: ~101 = -110)
Left shift: <<
Example: 5 << 2 returns 20 (in binary: 101 << 2 = 10100)
Right shift: >>
Example: 10 >> 1 returns 5 (in binary: 1010 >> 1 = 0101)

### Question 4
**What is the result when the following program is executed?**

![](/assets/images/operators.jpg)

### Answers
*   When the above program is executed, it will output the following values to the console:
 1
 8
 15
*   This is because the for loop initializes the variable i to 1, and then continues looping as long as i is less than 20. In each iteration of the loop, the code block is executed, which includes the statement console.log(i), printing the value of i to the console.

*   The loop also increases i by 7 in each iteration, using the expression i += 7. So, the first value printed is 1, then 8 (which is 1 + 7), and finally 15 (which is 8 + 7). Since 15 + 7 is greater than or equal to 20, the loop terminates and the program ends.