let todo = [];

input = prompt('What would you like to do?');


while(input.toLowerCase() !== "quit"){
    switch(input.toLowerCase()) {
        case "new":
            todoItem = prompt('What item you like to add?')
            todo.push(todoItem);
            break;
        case "delete":
            if(todo.length === 0){
                console.log("No items to delete!");
                break;
            }
            itemToDelete = parseInt(prompt(`What is the index of the item you want to delete\nBetween 0 and ${todo.length-1}`))
            while(itemToDelete == NaN || itemToDelete >= todo.length || itemToDelete < 0){
                itemToDelete = parseInt(prompt(`What is the index of the item you want to delete\nBetween 0 and ${todo.length-1}`))     
            }
            console.log(itemToDelete)
            todo.splice(itemToDelete, 1);
            break;
        case "list":
            console.log("+====================+");
            for(let i = 0; i < todo.length; i++){
                console.log(`#${i} : ${todo[i]}`)
            }
            console.log("+====================+");
            break;
    }
    input = prompt('What would you like to?')
}