var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]
//[7, 0, 1, 3, 4, 1, 2, 1] // 9
//  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] //10
// [2, 2, 2, 2, 2] // 0

function findWather(array) {

    var max_one =  array[0],
        index_one = 0,
        max_two = array[0],
        index_two = 0,
        count = 0,
        water_one = 0
        water_two = 0,
        water = 0;

    do{
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= max_one) {
            max_one = array[i];
            water = water_one
            console.log(max_one)
        } else {
            water_one += max_one - array[i]
        }
    }

    for ( i = array.length-1; i >= 0; i--) {
        if (array[i] > max_two) {
            max_two = array[i];
            water += water_two;
            console.log(max_two)
        } else {
            water_two += max_two - array[i]
        }
        if (max_one === max_two) {
            index_two = array.length;
            continue;
        }
    }
} while (index_two < array.length);
    console.log(water)
}

findWather(array);