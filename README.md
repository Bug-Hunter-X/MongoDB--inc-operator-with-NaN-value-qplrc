# MongoDB $inc Operator with NaN Value
This repository demonstrates a common error when using the `$inc` operator in MongoDB: passing `NaN` as the increment value.  The `$inc` operator is designed to increment numerical fields. Providing `NaN` leads to an error, and the update operation fails.

## Bug
The `bug.js` file shows incorrect usage of the `$inc` operator.  Attempting to increment a counter field with `NaN` will cause the update to fail. 

## Solution
The `bugSolution.js` file demonstrates the correct usage. Before incrementing make sure the value is a valid number and handle invalid cases appropriately. 

## How to reproduce
1.  Clone the repository.
2.  Make sure you have MongoDB running and a collection named `myCollection`.
3.  Run `bug.js` and observe the error. 
4.  Run `bugSolution.js` to see the correct implementation.  