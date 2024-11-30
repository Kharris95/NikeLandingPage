import { CartItem } from "./CartItem";
export function Cart({cartItems}) {
    return (
        <>
            <h2 className="text-4xl mb-5 font-bold ">Cart</h2>
            <ul className="space-y-5">
                {cartItems.map((cartItem) => (
                <li 
                key={cartItem.product.id}>
                <CartItem item={cartItem}/>
                </li>
                ))}
            </ul>
        </>
    );

}