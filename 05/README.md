# Question

Create a file named filtered-ls.js.

Create a program that prints a list of files in a given directory, .
filtered by the extension of the files. You will be provided a directory .
name as the first argument to your program (e.g. '/path/to/dir/') and a .
file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to .
filter the list to only files that end with .txt. Note that the second .
argument will not come prefixed with a '.'.

Keep in mind that the first arguments of your program are not the first .
values of the process.argv array, as the first two values are reserved for .
system info by Node.

The list of files should be printed to the console, one file per line. You .
must use asynchronous I/O.

---

## TUTORIAL

### fs module

- To perform a filesystem operation use the fs module
- It is in the Node core library.
- To load this kind of module, or any other "global" module, use the following incantation:
  const fs = require('fs')

#### How to read filenames in a directory?

By using `fs.readdir(path[, options], callback)`
https://nodejs.org/api/fs.html
