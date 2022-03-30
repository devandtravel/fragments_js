function memoize(target, key, descriptor) {
  const originalMethod = descriptor.value
  const cache = {}
  descriptor.value = function (n: number): number {
    return cache[n] ? cache[n] : (cache[n] = originalMethod(n))
  }
}

class Utils {
  @memoize
  static fibonacci(n: number): number {
    return n < 2 ? 1 : Utils.fibonacci(n - 1) + Utils.fibonacci(n - 2)
  }
}

console.time('count')
console.log(Utils.fibonacci(50))
console.timeEnd('count') // so long

console.time('count2')
console.log(Utils.fibonacci(1000)) // 7.0330367711422765e+208
console.timeEnd('count2') // fast
