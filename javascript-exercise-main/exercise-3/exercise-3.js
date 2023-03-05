function removeFromArray(array, deleteItem) {
    var index = array.indexOf(deleteItem);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log(array);
}

 removeFromArray([6,5,3,1,4], 3);
