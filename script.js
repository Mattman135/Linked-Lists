class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class List {
  constructor(head = null) {
    this.head = head
  }

  append(value) {
    if (this.head === null) {
      this.head = value
    } else {
      let LastNode = this.head
      if (LastNode) {
        while (LastNode.next) {
          LastNode = LastNode.next
        }
      }
      let tail = new Node()
      tail.data = value
      LastNode.next = tail
      return LastNode
    }
  }

  head() {
    return this.head
  }

  tail() {
    let node = this.head
    if (node) {
      while (node.next) {
        node = node.next
      }
    }
    return node
  }

  size() {
    let node = this.head
    let count = 0
    while (node.next) {
      count++
      node = node.next
    }
    return count + 1
  }

  prepend(value) {
    let node = new Node(value)
    if (this.head) {
      node.next = this.head
    }
    this.head = node
  }

  at(index) {
    let s = list.size()
    if (index < 0 || index > s) return "Index out of range"

    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  pop() {
    let node = this.head
    if (node) {
      while (node.next) {
        node = node.next
        if (!node.next.next) {
          node.next = null
          return
        }
      }
    }
  }

  contains(value) {
    let node = this.head
    if (node.data === value) return true
    while (node.next) {
      node = node.next
      if (node.data === value) return true
    }
    return false
  }

  find(value) {
    let index = 0
    let node = this.head
    if (node.data === value) return index
    while (node.next) {
      node = node.next
      index++
      if (node.data === value) return index
    }
    return null
  }

  toString() {
    let node = this.head
    let string = `(${node.data}) -> `
    while (node.next) {
      node = node.next
      string += `(${node.data}) -> `
    }
    string += "null"
    console.log(string)
  }

  // toString
}

let node1 = new Node(1)
let node2 = new Node(2)
node1.next = node2
const list = new List(node1)
list.append(3)
list.append(6)
list.prepend(10)
