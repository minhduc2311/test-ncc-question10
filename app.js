function findMatchingValues(arr1, arr2) {
    const result = arr2.filter((obj) => {
        return arr1.indexOf(obj) !== -1;
      });
       console.log(result)
}

findMatchingValues([1, 2, 4, 5], [4, 5, 7]);
