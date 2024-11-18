export const cart = [] /* This variable can be used outside of cart.js without causing naming conflicts since we are exporting it. */


export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })

    if(matchingItem){
        matchingItem.quantity += 1
    }
    else {
        cart.push({
            productId : productId,
            quantity : 1
        });
    }
}