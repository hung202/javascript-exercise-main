// function convertNumber(number) {
//  var number = parseInt(number);
//  const result = number.toString(2);

// console.log('Binary:' + ' ' + result);
// }
// convertNumber(16)

function convertNumber2(number) {
  let bin =" "
  while(number>0){
    if (number%2 == 1) {
      bin = "1" + bin;
    }else{
      bin = "0" + bin;
    }
    number = Math.floor(number / 2);
  }

console.log(bin);
 }
 convertNumber2(26)