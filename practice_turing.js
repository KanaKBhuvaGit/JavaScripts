var calPoints = function (ops) {
    var result = null;
    var result_array = [];

    if (ops.length >= 1 && ops.length <= 1000) {
        ops.map((val) => {

            switch (val) {
                case "+":
                    result_array.push((result_array[result_array.length - 1]) + (result_array[result_array.length - 2]))
                    break;
                case "D":
                    result_array.push((result_array[result_array.length - 1]) * 2)
                    break;
                case "C":
                    result_array.pop()
                    break;
                default:
                    result_array.push(Number(val))
                    break;
            }
        })
        result = result_array.reduce((a, b) => a + b, 0)
    }
    return result;
}

console.log('Input: ["5", "2", "C", "D", "+"] => ', calPoints(["5", "2", "C", "D", "+"]))
console.log('Input: ["5", "-2", "4", "C", "D", "9", "+", "+"] => ', calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))
console.log('Input: ["1"] => ', calPoints(["1"]))
