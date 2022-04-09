import { NestedArray } from '../_types/arrays'

function flatten<T>(array: NestedArray<T>[]): T[] {
  return array.flat(Infinity)
}

// NestedArray type can't always correctly infer the type.
