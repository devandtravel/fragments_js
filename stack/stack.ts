class Stack<T> {
  private store: T[]
  public push(value: T): void {
    // code
  }

  public pop(): T {
    // code
  }
}

// usage
const numberStack = new Stack<number>()
numberStack.push(1) // ok

const stringStack = new Stack<string>()
stringStack.push('1') // ok

const booleanStack = new Stack<boolean>()
// booleanStack.push('1') // error
