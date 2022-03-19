const products = [
    { name: "Bananas", pricePerUnit: 1.49, quantity: 2 },
    { name: "Bread", pricePerUnit: 3.29, quantity: 1 },
    { name: "Chocolate", pricePerUnit: 5, quantity: 2 },
  ];
  
  function sumItems(products) {
    let output = 0;
    products.forEach((el,i) => {
        output += el.pricePerUnit * el.quantity
    })
    return output
  }
  
  document.querySelector('#output').innerHTML = sumItems(products);