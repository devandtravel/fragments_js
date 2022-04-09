function flattenDeepTyped<T>(array: T) {
  const result: FlatArray<T, 21>[] = []

  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array')
  }

  array.forEach(value => {
    if (Array.isArray(value)) {
      result.push(...flattenDeepTyped(value))
    } else {
      result.push(value)
    }
  })
  return result
}

// USAGE
const result1 = flattenDeepTyped([1, ['foo']]) // (string|number)[] <-- true typed result

// This compiler-level method infers the type recursively using infer up to nesting level 21
// (at deeper levels of nesting, the type may be incorrectly inferred).
// Therefore, using Infinity will produce the correct result,
// but it is not guaranteed that the correct types will be inferred.
