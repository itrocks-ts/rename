[![npm version](https://img.shields.io/npm/v/@itrocks/rename?logo=npm)](https://www.npmjs.org/package/@itrocks/rename)
[![npm downloads](https://img.shields.io/npm/dm/@itrocks/rename)](https://www.npmjs.org/package/@itrocks/rename)
[![GitHub](https://img.shields.io/github/last-commit/itrocks-ts/rename?color=2dba4e&label=commit&logo=github)](https://github.com/itrocks-ts/rename)
[![issues](https://img.shields.io/github/issues/itrocks-ts/rename)](https://github.com/itrocks-ts/rename/issues)
[![discord](https://img.shields.io/discord/1314141024020467782?color=7289da&label=discord&logo=discord&logoColor=white)](https://25.re/ditr)

# rename

Switch the formatting of names stored in strings between different naming conventions.

## Overview

This library provides functions to transform strings between various naming conventions,
along with a class that extends the native String object with these transformations.

## Installation

```sh
npm i @itrocks/rename
```

## Usage

### Importing the Functions

You can use the provided functions to convert strings between naming conventions:

```ts
import { toVariable } from '@itrocks/rename'
console.log(toVariable('ThisName'))
//> thisName
```

### Using the `Str` Class

Alternatively, you can use the [Str class](#str-class) for an object-oriented approach:

```ts
import Str from '@itrocks/rename'
console.log(new Str('ThisName').toColumn())
//> this_name
```

## API

All functions accept a string as their argument and return the transformed string.
The input string can follow any of the supported naming conventions.

### lcFirst

Converts the first character of the string to lowercase.

```ts
import { lcFirst } from '@itrocks/rename'
console.log(lcFirst('Hello World'))
//> hello World
```

### toClass

Converts the string to the class naming convention.

```ts
import { toClass } from '@itrocks/rename'
console.log(toClass('hello_world'))
//> HelloWorld
```

### toColumn

Converts the string to the column naming convention.

```ts
import { toColumn } from '@itrocks/rename'
console.log(toColumn('HelloWorld'))
//> hello_world
```

### toDisplay

Converts the string to a human-readable display format.

```ts
import { toDisplay } from '@itrocks/rename'
console.log(toDisplay('helloWorld'))
//> hello world
```

### toRoute

Converts the string to the route-to-feature naming convention.

```ts
import { toRoute } from '@itrocks/rename'
console.log(toRoute('HelloWorld'))
//> hello-world
```

### toVariable

Converts the string to the variable naming convention.

```ts
import { toVariable } from '@itrocks/rename'
console.log(toVariable('HelloWorld'))
//> helloWorld
```

### ucFirst

Converts the first character of the string to uppercase.

```ts
import { ucFirst } from '@itrocks/rename'
console.log(ucFirst('hello, world'))
//> Hello, world
```

### Str Class

The Str class extends the native JavaScript
[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
object and includes all the transformation methods listed above.

```ts
import Str from '@itrocks/rename'

const str = new Str('hello_world')
console.log(str.toClass())
//> HelloWorld
console.log(str.toDisplay())
//> hello world
```
