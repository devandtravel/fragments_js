import { NestedArray } from '../_types/arrays'

function flatten<T>(array: NestedArray<T>[]): T[] {
  return array.flat(Infinity)
}
