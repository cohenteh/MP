function createUnifyArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let finalRes = [];
        for (let j = 0; j < arr[i].length; j++) {
            let maxIndex = 0;
            let maxValue = arr[i][j][0]
            for (let k = 0; k < arr[i][j].length; k++) {
                if (arr[i][j][k] > maxValue) {
                    maxValue = arr[i][j][k];
                    maxIndex = k;
                }
            }

            finalRes.push(maxIndex)

        }


        arr[i] = finalRes.concat([]);
    }

    return arr;
}


//for example arr1: [[0, 1, 2], [3, 4, 5]]
//for example arr2: [[10, 2, 1], [4, 3, 5]]
function compare(arr1, arr2) {
    console.log("arr1", arr1);
    console.log("arr2", arr2);

    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === arr2[i][j]) {
                counter++;
            }
        }
    }

    return counter;
}

function compare2(arr1, arr2, pos) {
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (j >= pos && arr1[i][j] === arr2[i][j]) {
                counter++;
            }
        }
    }

    return counter;
}

let x;

function run() {
    x = compare2(createUnifyArr(arr1), arr2, 110)
}

function run2() {
    x = createUnifyArr(arr1)
}


run()
console.log(x)