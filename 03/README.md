# Question

Create a file named my-first-io.js.

Write a program that uses a single synchronous filesystem operation to .
read a file and print the number of newlines (\n) it contains to the .
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first .
command-line argument (i.e., process.argv[2]). You do not need to make .
your own test file.

---

## TUTORIAL

### fs module

- To perform a filesystem operation use the fs module
- It is in the Node core library.
- To load this kind of module, or any other "global" module, use the following incantation:
  const fs = require('fs')

#### How to read a file?

By using `readFileSync(path, options)`.

https://nodejs.org/api/fs.html.

set option to 'utf-8' to read text file in utf-8 encoding mode.

#### synchronous vs asynchronous

Async:

- Send request
- go on with other code
- response come in any time on a callback

Sync:

- Send request
- Wait for response
- go on with other code after response
