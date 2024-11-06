//arr of objects{name,price}
//sort them in ascending order based on price

const sortProducts = (products) => {
    let sorted_products = products.sort((a, b) => a.price - b.price)
    return sorted_products
}

//examples
console.log(sortProducts([{ name: 'apple', price: 22500 }, { name: 'banana', price: 12000 }, { name: 'orange', price: 32000 }]))