//https://jsfiddle.net/arp8hx33/32/

var arr = [14, 7, 3, 12, 9, 11, 6, 2, 4];
var splittedArray = [];

function splittedObj(first, last) {
    this.first = first;
    this.last = last;
}

function split(first, last) {

    if (first != last) {
        var middle = Math.floor((first + last) / 2);
        var lelfArr = new splittedObj(first, middle);
        var rightArr = new splittedObj(middle + 1, last);

        split(lelfArr.first, lelfArr.last);
        split(rightArr.first, rightArr.last);
    } else {
        splittedArray.push(new splittedObj(first, last));
    }
    return splittedArray;

}

var mergeHelper = function (newArray, firstArray, secondArray) {

    if (!newArray) {
        var newArr = [];
    } else var newArr = newArray;

    if (firstArray.length == 0 && secondArray.length == 0) {
        return newArr;
    } else if (firstArray.length == 0) {

        newArr.push(secondArray.shift());

        return mergeHelper(newArr, firstArray, secondArray);

    } else if (secondArray.length == 0) {

        newArr.push(firstArray.shift());

        return mergeHelper(newArr, firstArray, secondArray);

    } else {
        if (firstArray[0] < secondArray[0]) {
            newArr.push(firstArray.shift());
            return mergeHelper(newArr, firstArray, secondArray);
        } else {
            newArr.push(secondArray.shift());
            return mergeHelper(newArr, firstArray, secondArray);
        }

    }
    console.log(newArr);
    return newArr;

}

    function merge(mergedArrayObj) {

        if (mergedArrayObj.length == 1) {
            return mergedArrayObj;
        }

        var newMergedArrayObj = [];

        while (mergedArrayObj.length >= 1) {

            var firstNode = mergedArrayObj.shift();
            var secondNode = [];

            if (mergedArrayObj.length == 0) {
                newMergedArrayObj.push(mergeHelper(null, firstNode, secondNode));
                break;
            }

            if (mergedArrayObj.length != 0) {

                secondNode = mergedArrayObj.shift();
                if (mergedArrayObj.length == 0) {
                    newMergedArrayObj.push(mergeHelper(null, firstNode, secondNode));
                    break;
                }
            }

            var newNode = mergeHelper(null, firstNode, secondNode);
            newMergedArrayObj.push(newNode);

        }

        return merge(newMergedArrayObj);

    }


    function mergeSort(array) {

        debugger;
        var first = 0;
        var last = array.length;

        var splittedArr = split(first, last);


        var mergedArrayObj = [];

        for (var i = 0; i < splittedArr.length; i += 2) {

            if (array[splittedArr[i].first] > array[splittedArr[i + 1].first]) {
                var mergedArr = [array[splittedArr[i + 1].first], array[splittedArr[i].first]]
                mergedArrayObj.push(mergedArr);

            } else {
                if (array[splittedArr[i + 1].first]) {
                    var mergedArr = [array[splittedArr[i].first], array[splittedArr[i + 1].first]];
                    mergedArrayObj.push(mergedArr);

                } else {
                    var mergedArr = [array[splittedArr[i].first]];
                    mergedArrayObj.push(mergedArr);
                }

            }
        }

        var sortedList = merge(mergedArrayObj);

        console.log(sortedList);

    }

mergeSort(arr);
