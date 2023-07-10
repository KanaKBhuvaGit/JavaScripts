var minimumShortLetter = function (s, t) {
    array = s.split("");
    var result = [];
    var firstIndexOf = 0;
    var lastIndexOf = array.indexOf((t));

    array.forEach((element, currIndex) => {
        if (element === t) {
            result.push(0)
            firstIndexOf = lastIndexOf + 1
            if (array.indexOf(t, firstIndexOf) !== -1) {
                lastIndexOf = array.indexOf(t, firstIndexOf)
            }
        } else {
            maxDistance = Math.abs(lastIndexOf - currIndex)
            minDistance = Math.abs(currIndex - firstIndexOf + 1)
            if (firstIndexOf > 0) {
                result.push(Math.min(maxDistance, minDistance))
            } else {
                result.push(maxDistance)
            }
        }
    });

    return result;
}

console.log(minimumShortLetter("mkteneetkybe", "e"))
//Output [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

// console.log(minimumShortLetter("mkteneetkybeerfge", "e"))
