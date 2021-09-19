function getStringLengthRecursive(arr) {
  if (arr.pop() === undefined) return 0
  return 1 + getStringLengthRecursive(arr)
}

console.log(getStringLengthRecursive([1, 2, 3, 4]))
