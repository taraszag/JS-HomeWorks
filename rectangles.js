
function count(arr) {
    let counts = 0
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            if (arr[i][j] == '+') {
                counts += searchRectangles(i, j, arr)

            }
        }
    }
    return counts
}

function searchRectangles(i, j, arr) {
    let counts = 0
    for (let j2 = j + 1; j2 < arr[i].length; j2 += 1) {
        if (arr[i][j2] == "+") {
            counts += countRectangles(i, j, arr, j2)
        }
        else if (arr[i][j2] != '-') {
            break;
        }
    }
    return counts
}

function countRectangles(i, j, arr, j2) {
    let counts = 0
    for (let i2 = i + 1; i2 < arr.length; i2 += 1) {
        if (arr[i2][j] == "+" && arr[i2][j2] == "+") {
            counts += 1
        }
        else if ((arr[i2][j] != '|' && arr[i2][j] != '+') || (arr[i2][j2] != '|' && arr[i2][j2] != '+')) {
            break;
        }
    }
    return counts
}

const actual = count(
    [
        '+------+----+',
        '|      |    |',
        '+---+--+    |',
        '|   |       |',
        '+---+-------+',
    ]
);
console.log([
    '+------+----+',
    '|      |    |',
    '+---+--+    |',
    '|   |       |',
    '+---+-------+',
])
console.log(actual)