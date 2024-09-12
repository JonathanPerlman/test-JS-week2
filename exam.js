// Mission 1
function Mission1(arr){
    return arr.filter(num => num % 2 === 0);
}

// Mission 2
function Mission2(str){
    const words = str.split(' ');
    return words.filter(word => word.length === 4).length;
}

// Mission 3

function Mission3(twoArray){
    return twoArray.flat();

}

// Mission 5

function Mission5(keysArr, valuesArr){
    const newObject = {};
    for(let i = 0; i < keysArr.length; i++){
        newObject[keysArr[i]] = valuesArr[i];
    }
    return newObject
}


module.exports ={
    Mission1,
    Mission2,
    Mission3,
    Mission5
}