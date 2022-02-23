# Question

Create a file named my-first-async-io.js.

Write a program that uses a single asynchronous filesystem operation to .
read a file and print the number of newlines it contains to the console .
(stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first .
command-line argument.

---

## TUTORIAL

### fs module

- To perform a filesystem operation use the fs module
- It is in the Node core library.
- To load this kind of module, or any other "global" module, use the following incantation:
  const fs = require('fs')

#### How to read a file asynchronously?

By using `fs.readFile(path[, options], callback)`
https://nodejs.org/api/fs.html

#### node conventions callbacks

- callback is a function in form of `function callback (err, data) { /* ... */ }`
- err is null: it means success in what you attempted to do.

#### synchronous vs asynchronous

Async:

- Send request
- go on with other code
- response come in any time on a callback

Sync:

- Send request
- Wait for response
- go on with other code after response
