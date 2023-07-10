function countPairsWithDiffK(arr, n, k) {
    let count = 0;
    arr.sort();

    let l = 0;
    let r = 0;
    while (r < n) {
        if (arr[r] - arr[l] == k) {
            count++;
            l++;
            r++;
        }
        else if (arr[r] - arr[l] > k) {
            l++;
        }
        else {
            r++;
        }
    }
    return `Total pairs with difference ${k}: ${count}`;
}

console.log(countPairsWithDiffK([1, 5, 3, 4, 2], 5, 4));