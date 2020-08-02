// BigO - ex-6 : Reverse an array
export function reverseArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let other = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
    console.log(arr);
  }
  return arr;
}
