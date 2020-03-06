var displayArray = function (array, gap, minPosition, startX, startY) {
    textFont(createFont("monospace"), 12);
    fill(0, 0, 0);
    if (gap !== 0) {
        line(minPosition * 15 + startX + 5,
            (gap - 1) * 30 + startY + 5,
            (gap - 1) * 15 + startX + 5,
            (gap) * 30 + startY + 5);
    }
    for (var i = 0; i < array.length; i++) {
        text(array[i], 15 * i + startX, 30 * gap + startY, 100, 100);
    }
};

var indexOfMinimum = function (array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;
    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

var swap = function (array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var selectionSort = function (array, startX, startY) {
    var minIndex = 0;
    for (var i = 0; i < array.length; i++) {
        displayArray(array, i, minIndex, startX, startY);
        minIndex = indexOfMinimum(array, i);
        swap(array, minIndex, i);
    }
};

var array1 = [3, 4, 5, 1, 2];
var array2 = [9, 2, 3, 2, 4];
var array3 = [5, 4, 3, 2, 1];
var array4 = [5, 7, 6, 8, 9];
selectionSort(array1, 0, 0);
selectionSort(array2, 0, width / 2);
selectionSort(array3, width / 2, height / 2);
selectionSort(array4, height / 2, 0);