function insertionSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[j], list[i]] = [list[i], list[j]];
      }
    }
  }
  return list;
}

console.log(insertionSort([2, 5, 1, 76, 4]));
