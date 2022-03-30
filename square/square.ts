function square(num: string | number): number {
  if (typeof num === 'string') {
    return parseInt(num, 10) * parseInt(num, 10)
  } else {
    return num * num
  }
}
