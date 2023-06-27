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

## Function Literals

You can also call a function by using it as a literal.

```js
print `"Hello world!"`
```

This allows for a flexible syntax.

```js
add `3, 2`
add `(3, 2)`
```

And fine-grained control over how your code runs. You can easily call by reference, or by value.

```js
score = 2
add `3, score`
add `3, ${score}`
```

## With

By the way, to code with Airspace, simply surround your code with a `with` block.

```js
with (Airspace) {
   print `Hello world!`
}
```

All examples in this readme should be placed within the `with` block.

**New for 2023:** If you're using a build-step, you can just write `"use airspace"` at the top of the file.

## Rocket Operator

To run your code asynchronously, place it after a rocket operator (`x=o=>`). This shoots it to the next animation frame.

```js
x=o=> print `"Hello world!"`
```

The rocket operator also supports code blocks.

```js
x=o=> {
   print `"Hello"`
   print `"world!"`
}
```

## Functions

To create a function, use the arrow operator (`=o=>`).

```js
greet =o=> print `"Hello world!"`

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

print `name` // "Lu"
```

You can control exactly how your variable works. By default, it just gets and sets its value, but you can change this.

```js
name = "Lu"
name.get =o=> o.value.toUpperCase()

print `name` // "LU"
```

## Ownership

Airspace is **NOT** endorsed by the Dreamberd Foundation in any way.

As mentioned in the official Dreamberd project:

- ***Using the word 'DreamBerd' in your project name implies that the DreamBerd Foundation does not own your project.***