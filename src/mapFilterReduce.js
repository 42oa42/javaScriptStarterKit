let cart = [
  { id: 1, productName: "Telefon", quatity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak ", quatity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quatity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quatity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quatity: 3, unitPrice: 50 },
  { id: 6, productName: "Pot", quatity: 5, unitPrice: 150 },
];

/*cart.push({ id: 7, productName: "Ruhsat", quatity: 1, unitPrice: 20 })*/ //Ekleme yapar

console.log("<ul>");
cart.map((product) => { //sepetteki ürünleri bu sayede hesaplarız 
  console.log(
    "<li> " +
      product.productName +
      " :" +
      product.unitPrice * product.quatity +
      " </li>"
  );
});
console.log("</ul>");

let total = cart.reduce((acc,product)=> acc + product.quatity  * product.unitPrice,0)

console.log(total)

let quantityOver2 =   cart.filter(product=>product.quatity<5 && product.unitPrice<4000)//Filtreler

console.log(quantityOver2)

let addToCart = (sepet) => {
  sepet.push({ id: 7, productName: "Ruhsat", quatity: 1, unitPrice: 20 }); //ekleme yapar
};
addToCart(cart);
console.log(cart);

let sayi = 10;

let SayiTopla = (number) => {
  number += 1;
};
SayiTopla(sayi);
console.log(sayi);
