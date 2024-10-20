import React, { createContext, useCallback, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const calculateTotal = useCallback(() => {
        const total = cartItems.reduce(
            (sum, item) => sum + (item.productPrice * item.quantity),
            0
        );
        setTotalAmount(total);
    }, [cartItems]);

    useEffect(() => {
        calculateTotal();
    }, [cartItems, calculateTotal]);

   const addToCart = (product) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('User not logged in');
            return false;
        }

        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(
                (item) => item.id === product.id && item.size === product.size
            );

            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });

        return true;
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCartItems([]);



    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};
