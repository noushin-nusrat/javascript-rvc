// MULTI_LEVEL-CONDITION

let price = 3000;
if(price>=5000){
       // 10 % discount
    let discount = price * 10 / 100;
    let payAmount = price -discount;
    console.log(payAmount);
}
else if(price>=2500){
    // 5 % discount
    let discount = price * 5 / 100;
    let payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price);
}