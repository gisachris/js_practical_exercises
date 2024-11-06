//arr of objects{name,price}
//sort them in ascending order based on price

const sortProducts = (products) => {
    let sorted_products = products.sort((a, b) => { b.price - a.price })
    return sorted_products
}

//examples
console.log(sortProducts([{ name: 'banana', price: 1 }, { name: 'apple', price: 2 }, { name: 'orange', price: 3 }]))