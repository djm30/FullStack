// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

const groceryList = document.querySelector("#list")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    
    addToList(productInput.value, quantityInput.value);
    
    productInput.value = ""
    quantityInput.value = ""
    
})

let addToList = (product, quantity) =>{
    const groceryItem = document.createElement("li")
    groceryItem.append(`${quantity} - ${product}`)
    groceryList.append(groceryItem)
}