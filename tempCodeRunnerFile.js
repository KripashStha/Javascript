function findsum(list) {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    for (let n of list) {
      const sum = n + n;
      if (sum === num) {
        console.log(sum);
        return sum;
      }
    }
    console.log("null");
    return null;
  }
  
  console.log(findsum([1, 2, 3, 4, 5, 6]));