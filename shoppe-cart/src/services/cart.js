//Quais ações o meu carrinho pode fazer?
/**
 * Adiciona item
 * Remover item
 * Deletar item
 * calcular o total da compra
 */

// Adiciona item
 async function addItem(userCart, item){
    userCart.push(item);

 }

 //Deletar item
 async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
      userCart.splice(index, 1);
    }
 }

 //Remover item
 async function removeItem(userCart, index){
    //transforma o indice visual do usuario,par ao indice do backend
    const deleteIndex = index -1;

    //verifica se o index é maior que zero e menor que o tamanho do carrinho
    if(index >= 0 && index <= userCart.length){
      userCart.splice(deleteIndex, 1);
    }
 }

 //Remove item -1
 async function removeList(userCart,item){
    //Encontrando o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    //Não encontrando o item
    if(indexFound == -1){
      console.log("Item não encontrado");
        return;
    }
    // item maior que 1, 
    if(userCart[indexFound].quantity > 1){
      userCart[indexFound].quantity -= 1;
      return;
    }

    //se o item for igual a 1 deletar
    if(userCart[indexFound].quantity === 1){
      userCart.splice(indexFound,1)
      return;
    }
 }

 async function displayCart(userCart){
      console.log("\nShoppe cart list:");
      userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
      });
 }

 //calcular o total da compra
 async function calculateTotal(userCart){
   console.log('\nShopee Cart Total is:');

   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
   console.log(`🎁Total ${result}`);
    
 }

 export {
   addItem,
   calculateTotal,
   deleteItem,
   removeList,
   removeItem,
   displayCart
 };
