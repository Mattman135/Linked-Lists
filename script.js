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
    let node = this.head
    while (node) {
      if (node.next == null) {
        node.next = value
        return
      }
      node = node.next
    }
  }
}

let node1 = new Node(2)
let node2 = new Node(5)
let node3 = new Node(6)

node1.next = node2
node2.next = node3
let list = new List(node1)
console.log(list)
