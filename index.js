var array = [0,0,0,0,1000,0,1001,1,0,1]
//[7, 0, 1, 3, 4, 1, 2, 1] // 9
//  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] //10
// [2, 2, 2, 2, 2] // 0

function findWather(array) {

    var max_one =  array[0],
        index_one = 0,
        max_two = array[array.length-1],
        index_two = 0,
        count = 0,
        water_one = 0,
        water_two = 0,
        water = 0;


    do{

    for (var i = 0; i < array.length; i++) {
            if (array[i] >= max_one) {
                water += max_one * index_one - water_one;
                water_one = 0;
                index_one = 0;
                max_one = array[i];
                console.log(max_one);
            } else {
                water_one += array[i];
                index_one += 1;
            }
        }


    for ( i = array.length-1; i >= 0; i--) {
            if (array[i] > max_two) {
                water += max_two * index_two - water_two;
                water_two = 0;
                index_two = 0;
                max_two = array[i];
                console.log(max_two)
            } else {
                water_two += array[i];
                index_two +=1;
            }
        }

        if (max_one === max_two) {
            index_two = array.length;
            continue;
        }

} while (index_two < array.length);
    console.log('water = ', water);
}

findWather(array);