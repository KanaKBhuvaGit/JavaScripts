function processData(input) {
    var array = [...input].sort((a, b) => a - b);
    var max_value_arr = array.slice(array.length - 1)
    var mid = Math.round(array.length / 2)
    var prefix_arr = array.slice(0, mid - 1)
    var suffux_arr = array.slice(mid - 1, array.length - 1).sort((a, b) => b - a)
    var result_arr = prefix_arr.concat(max_value_arr, suffux_arr)
    return result_arr.join(" ")
}

console.log(processData([2, 3, 5, 1, 4]))
console.log(processData([1, 2, 3, 4, 5, 6, 7]))
