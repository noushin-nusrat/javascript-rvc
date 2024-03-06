let age = 49;
let price = 500;
if(age<=12){
    console.log('you can eat for free');
}
else if(age>=40){
// 10% discount
  let discount = price * 10 /100;
  let payAmount = price - discount;
  console.log(payAmount);
}
else if(age>=50){
// 25% discount
  let discount = price * 25 /100;
  let payAmount = price - discount;
  console.log(payAmount);
}
else if(age>=60){
  let discount = price * 50 /100;
  let payAmount = price - discount;
  console.log(payAmount);
}
else{
    console.log(price)
}