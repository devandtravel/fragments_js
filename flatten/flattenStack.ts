import { NestedArray } from '../_types/arrays'

function flatten<T>(array: NestedArray<T>[]): T[] {
  const result: T[] = []
  const stack = [...array]

  while (stack.length > 0) {
    const value = stack.pop()

    if (Array.isArray(value)) {
      stack.push(...value)
    } else {
      result.push(value)
    }
  }
  return result.reverse()
}
