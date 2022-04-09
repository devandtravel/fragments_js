import { NestedArray } from '../_types/arrays'

function flattenRecursive1<T>(array: NestedArray<T>[]): T[] {
  const result: T[] = []

  array.forEach(value => {
    if (Array.isArray(value)) {
      result.push(...flattenRecursive1(value))
    } else {
      result.push(value)
    }
  })
  return result
}

function flattenRecursive2<T>(array: NestedArray<T>[]): T[] {
  return array.reduce(
    (acc: T[], value) =>
      acc.concat(Array.isArray(value) ? flattenRecursive2(value) : value),
    []
  )
}

// USAGE
// flattenArr is string[]
const flattenStringArr = flattenRecursive2<string>(['bar', ['baz', ['foo']]])
