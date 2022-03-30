function numberSum(...numbers: number[]): number {
  return numbers.reduce((sum: number, current: number): number => {
    sum += current
    return sum
  }, 0)
}
