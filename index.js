// Add your functions here

function map(arr, func){
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    });
    return newArr
}
