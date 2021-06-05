const quickSort = ({ array, setArray, setColorChangeIndex }) => {
    const len = array.length;
    let temp;
    let auxArray = [...array];
  //   console.log("orignal array",auxArray);
    let arrays = [];
    let indexes = [];
    // for (let i = 0; i < len-1; i++) {
    //   for (let j = 0; j < len-i-1; j++) {
    //     if (auxArray[j] > auxArray[j+1]) {
    //       temp = auxArray[j];
    //       auxArray[j] = auxArray[j+1];
    //       auxArray[j+1] = temp;
        //   arrays.push([...auxArray]);
        //   indexes.push([j,j+1]);
    //     }
    //   }
    // }
    function partition(arr, start, end){
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            arrays.push([...arr]);
            indexes.push([i,pivotIndex]);
            pivotIndex++;
            }
        }
        
        // Putting the pivot value in the middle
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        arrays.push([...arr]);
        indexes.push([end,pivotIndex]);
        return pivotIndex;
    }

    function quickSortRecursive(arr, start, end) {
        // Base case or terminating case
        if (start >= end) {
            return;
        }

        // Returns pivotIndex
        let index = partition(arr, start, end);

        // Recursively apply the same logic to the left and right subarrays
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }

    quickSortRecursive(auxArray, 0, len-1)
    for (let index = 0; index < arrays.length; index++) {
      setTimeout(() => {
        setArray(arrays[index]);
        setColorChangeIndex([...indexes[index]])
      }, (index * 700)/(len));
    }
    setTimeout(() => {
      setColorChangeIndex([])
    }, (arrays.length * 700)/(len));
    return arrays;
};
export default quickSort;
  


    // function quickSortRecursive(arr, start, end) {
    //     // Base case or terminating case
    //     if (start >= end) {
    //         return;
    //     }

    //     // Returns pivotIndex
    //     let index = partition(arr, start, end);

    //     // Recursively apply the same logic to the left and right subarrays
    //     quickSort(arr, start, index - 1);
    //     quickSort(arr, index + 1, end);
    // }
    // function partition(arr, start, end){
    //     // Taking the last element as the pivot
    //     const pivotValue = arr[end];
    //     let pivotIndex = start; 
    //     for (let i = start; i < end; i++) {
    //         if (arr[i] < pivotValue) {
    //         // Swapping elements
    //         [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    //         // Moving to next element
    //         pivotIndex++;
    //         }
    //     }
        
    //     // Putting the pivot value in the middle
    //     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    //     return pivotIndex;
    // };