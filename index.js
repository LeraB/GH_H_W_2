var array = [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
//[7, 0, 1, 3, 4, 1, 2, 1] // 9
  //  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] //10
// [2, 2, 2, 2, 2] // 0


var max_one = 0,
    max_two = array[0],
    index_one = 0,
    index_two = 0,
    count = 0,
    water_two,
    water = 0;

function findWather(arr) {
    for (i = index_one; i < array.length; i++) {
        if (max_one < array[i]) {
            max_one = array[i];
            index_one = i;
            break;
        }
    }
    do {
        for (var i = index_one; i < array.length; i++) {

            if ((array[i - 1] < array[i]) &&
                (array[i] !== max_one) &&
                ((array[i] > array[i + 1]) || (array[i] === array[i + 1]))) {
                    max_two = array[i];
                    index_two = i;
                    break;

            } else {
                if ((array[i - 1] < array[i]) && (array[i] !== max_one) && (i === array.length - 1)) {
                    max_two = array[i];
                    index_two = i;
                    break;
                }

                console.log(max_two)
            }
        }
        if (max_one === max_two) {
            index_two = array.length;
            continue;
        }

        water_two = max_one < max_two ? max_one : max_two;
        count = 0;
        for (var i = index_one + 1; i < index_two; i++) {
            count = count + array[i];
        }

        water += ((index_two - 1 - index_one) * water_two) - count;
        max_one = max_two;
        index_one = index_two;
    }
    while (index_two < array.length) ;
    console.log('water = ', water);

}

findWather(array);