# Read

> GitHub markdown reader.

## Why?

For when you want to share a document on GitHub without any of the UI elements.

## How?

Replace `raw.githubusercontent.com` URLs with `read.xvvvyz.xyz` like so:

```diff
- https://raw.githubusercontent.com/xvvvyz/read/main/README.md
+ https://read.xvvvyz.xyz/xvvvyz/read/main/README.md
```

## Development Setup

Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node](https://nodejs.org/en/download),
then:

```shell
git clone git@github.com:xvvvyz/read.git
cd read
npm i
npm start
```
