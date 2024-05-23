import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishiList = [];

console.log('Welcome to the your Shoppe Cart!');

//Criando os itens
const item1 = await createItem("Dino Rex",59.90, 1);
const item2 = await createItem("Amoeba",7.99, 4);

//Adicionando
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await  cartService.removeList(myCart, item2);
await  cartService.removeList(myCart, item2);
await  cartService.removeList(myCart, item2);
await  cartService.removeList(myCart, item2);

// await cartService.removeItem(myCart,1);

await cartService.displayCart(myCart);

// await cartService.deleteItem(myCart,item2.name);
// await cartService.deleteItem(myCart,item1.name);


await cartService.calculateTotal(myCart);




