function addToCart(productName = "Elma", quantity) {
  console.log("Sepeti eklendi : " + productName + " , Adet : " + quantity);
}

// addToCart()
addToCart("Yumurta", 10);
// addToCart("Karpuz")

let sayHello = () => {
  // function yazmadan kullanabiliriz
  console.log("Hello World !");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

let addToCart2 = (productName, quantity, unitPrice) => {};

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

let addToCart3 = (product) => {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
};

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

let add = (bisey, ...numbers) => {
  //rest
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(bisey);
};

add(20, 30);
// add(20,30,40)
// add(20,30,40,50)

let numbers = [30, 10, 50, 600, 120];
// console.log(...numbers)
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
  { name: "İç Anadolu ", population: "20M" },
  { name: "Marmara ", population: "30M" },
  { name: "Karadeniz ", population: "10M" },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Sinop", "Trabzon"],
  ],
];
// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Elma", unitPrice: 10, quantity: 5 });
console.log(newQuantity);
console.log(newProductName);
console.log(newUnitPrice);
