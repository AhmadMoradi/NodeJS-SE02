# Question

Create a file named baby-steps.js.

Write a program that accepts one or more numbers as command-line arguments .
and prints the sum of those numbers to the console.

---

## TUTORIAL

process.argv

You can access command-line arguments via the global process object.
The process object has an argv property which is an array containing the complete command-line.

e.g:

node baby-steps.js 1 2 3
['node', '/path/to/your/baby-steps.js', '1', '2', '3']

NOTE:

- is always an array
- the first element is always path to 'node'
- the second element is always path to the current file that is executing
- all elements are in string.

---
