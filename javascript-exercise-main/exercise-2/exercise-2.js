function reverseString(string) {
  let arr =string.split("");
  let arr1 = arr.reverse().join(" ")
  return arr1
}
 console.log(reverseString('d,k,s,f,g'));