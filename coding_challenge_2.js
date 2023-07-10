var orderColor = function (ops) {
    var index = 0;
    array = ops.split(" ");
    var result = Array(array.length - 1)

    array.map((val) => {
        index = val.charAt(val.length - 1)
        result[index - 1] = val.substr(0, val.length - 1);
    })

    return result.join(" ");
}

console.log(orderColor("red2 blue5 black4 green1 grey3"))
