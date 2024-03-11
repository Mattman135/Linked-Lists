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
}

let node1 = new Node(1)
let node2 = new Node(2)
node1.next = node2
let list = new List(node1)
console.log(list)

list.append(3)
