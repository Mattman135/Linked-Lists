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

  // prepend, at(index), pop, contains(value), find(value), toString
}

let node1 = new Node(1)
let node2 = new Node(2)
node1.next = node2
const list = new List(node1)
list.append(3)
list.append(4)
console.log(list)
console.log(list.size())
