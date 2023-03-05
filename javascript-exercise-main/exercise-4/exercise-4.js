function leapYears(year) {
  if(year%4 ==0 && year %100 !=0 || year%400 == 0){
    console.log("This is leap years");
  }else{
    console.log(" not is leap years");
  }
}
 leapYears(2004)
