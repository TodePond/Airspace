# Airspace

Airspace is a perfect JavaScript library, brought to you by the DreamBerd Foundation.

# Colon

End every line with a colon. You can achieve this by combining two semi-colons to make a full colon.

```js
print("Hello world!");;
```

Alternatively, you can use half a colon, and the second half will be automatically inserted for you.

```js
print("Hello world!");
```

Similarly, you can use none, and Airspace will add both for you.

```js
print("Hello world!")
```

# Execute

You can use the execute operator (`x`) to execute a function without brackets.

```js
print.x= "Hello world!"
```

Or use it on an array to flip the function around.

[3, 2].x(add)

# Literal

You can also call a function by using it as a literal.

```js
print `Hello world!`
```

# With

By the way, to code with Airspace, simply surround your code with a `with` block.

```js
with (Airspace) {
   print `Hello world!`
}
```

All examples in this readme should be placed within the `with` block.

**New for 2023:** If you're using a build-step, you can just write `"use airspace"` at the top of the file.
