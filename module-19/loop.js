// for of: [array]
// for in [object]


const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}
for (let prop in mobile) {
    // console.log(prop);
    console.log(prop, ':', mobile[prop]);
}