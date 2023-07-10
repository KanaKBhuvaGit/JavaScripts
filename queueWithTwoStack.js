class Queue {

    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enQueue(x) {
        this.s1.push(x)
    }

    deQueue() {
        if (this.s1.length == 0 && this.s2.length == 0) {
            return;
        }

        if (this.s2.length == 0) {
            while (this.s1.length != 0) {
                this.s2.push(this.s1[0]);
                this.s1.shift();
                
            }
        }
        let x = this.s2[0];
        this.s2.shift();
        return x;
    }

    getFirstElement() {
        let fe;
        if (this.s2.length == 0) {
            fe = this.s1[0]
        } else {
            fe = this.s2[0]
        }
        return fe;
    }

}


function processData(input) {
    // var arr = input.split("\n")
    var nq = input[0]
    let q = new Queue();

    for (i = 1; i < nq+1; i++) {
        if (input[i] == 2) {
            q.deQueue()
        } else if (input[i] == 3) {
            console.log(q.getFirstElement())
        } else {
            var op = String(input[i]).split(" ")[0]
            var val = String(input[i]).split(" ")[1]
            q.enQueue(val)
        }
    }
}

processData([10, "1 76", "1 33", 2, "1 23", "1 97", "1 21", 3, 3, "1 74", 3])

processData([10, '1 42', 2, "1 14", 3, "1 28", 3, "1 60", "1 70", 2, 2])
