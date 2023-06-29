# Airspace

Airspace is a perfect JavaScript library, brought to you by the [DreamBerd](https://github.com/TodePond/DreamBerd) Foundation.

## Colons

End every line with a colon. You can achieve this by combining two semi-colons to make a full colon.

```js
print("Hello world!");;
```

Alternatively, you can use half a colon, and a second half will be automatically inserted for you.

```js
print("Hello world!");
```

Similarly, you can use none, and Airspace will helpfully add both.

```js
print("Hello world!")
```

**Note:** Colons can be placed at the start of a line too. It makes no difference.

```js
;;print("Hello world!")
```

## Execute Operator

You can use the execute operator (`x=`) to execute a function without brackets.

```js
print.x= "Hello world!"
```

Or use it on an array to flip the function around.

```js
[3, 2].x(add)
```

If you prefer to run your code more trippingly, you can use the gentle execute operator (`,`).

```js
print, "Hello world!"
```

## Function Literals

You can also call a function by using it as a literal.

```js
print `"Hello world!"`
```

This allows for fine-grained control over how your code runs. You can easily call by reference, or by value.

```js
score = 2
add `3, score`
add `3, ${score}`
```

## Debug Operator

You might benefit from the debug operator (`.d`). Use it on any value to print it to the console.

```js
"Hello world!".d // "Hello world!"
```

You don't need to rearrange your code. Want to log something? Just chuck a 'dot d' on it.

```js
score = 3
if (score.d > 9) { // 3
   print("You win!")
} 
```

## With

By the way, to code with Airspace, simply surround your code with a `with` block.

```js
with (Airspace) {
   "Hello world!".d
}
```

All examples in this readme should be placed within the `with` block.

**New for 2023:** If you're using a build-step, you can just write `"use airspace"` at the top of the file.

## Rocket Operator

To run your code asynchronously, place it within a rocket operator (`x=o=>`). This shoots it to the next animation frame.

```js
x=o=> "Hello world!".d
```

The rocket operator also supports code blocks.

```js
x=o=> {
   print `"Hello"`
   print `"world!"`
}
```

## Functions

To create a function, use the unlit rocket operator (`=o=>`).

```js
greet =o=> "Hello world!".d

greet() // "Hello world!"
```

Use the blob operator (`o`) to access arguments.

```js
add =o=> o.a + o.b

add(3, 2) // 5
```

## Variables

To define a variable, just assign it.

```js
name = "Lu"

name.d // "Lu"
```

You can control exactly how your variable works. By default, it just gets and sets its value, but you can change this.

```js
name = "Lu"
name.get =o=> o.value.toUpperCase()

name.d // "LU"
```
