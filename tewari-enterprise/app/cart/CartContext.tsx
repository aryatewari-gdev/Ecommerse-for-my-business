"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/app/data/products";


export type CartItem = {
  product: Product;
  quantity: number;
  addClamp: boolean;
};


type CartContextType = {
  items: CartItem[];

  addToCart: (
    product: Product,
    quantity: number,
    addClamp: boolean
  ) => void;

  removeFromCart: (productId: string) => void;

  updateQuantity: (
    productId: string,
    quantity: number
  ) => void;

  clearCart: () => void;

  cartCount: number;

  total: number;
};


const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );


export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [items, setItems] = useState<CartItem[]>(
    []
  );


  useEffect(() => {

    try {

      const savedCart =
        localStorage.getItem("tewari-cart");

      if (savedCart) {

        setItems(
          JSON.parse(savedCart)
        );

      }

    } catch (error) {

      console.error(
        "Could not load cart:",
        error
      );

    }

  }, []);


  useEffect(() => {

    try {

      localStorage.setItem(
        "tewari-cart",
        JSON.stringify(items)
      );

    } catch (error) {

      console.error(
        "Could not save cart:",
        error
      );

    }

  }, [items]);


  function addToCart(
    product: Product,
    quantity: number,
    addClamp: boolean
  ) {

    setItems((currentItems) => {

      const existingIndex =
        currentItems.findIndex(
          (item) =>
            item.product.id === product.id &&
            item.addClamp === addClamp
        );


      if (existingIndex !== -1) {

        const updatedItems = [
          ...currentItems,
        ];

        updatedItems[
          existingIndex
        ] = {

          ...updatedItems[
            existingIndex
          ],

          quantity:
            updatedItems[
              existingIndex
            ].quantity + quantity,

        };

        return updatedItems;
      }


      return [

        ...currentItems,

        {
          product,
          quantity,
          addClamp,
        },

      ];

    });

  }


  function removeFromCart(
    productId: string
  ) {

    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          item.product.id !== productId
      )
    );

  }


  function updateQuantity(
    productId: string,
    quantity: number
  ) {

    if (quantity <= 0) {

      removeFromCart(productId);

      return;
    }


    setItems((currentItems) =>

      currentItems.map((item) =>

        item.product.id === productId

          ? {
              ...item,
              quantity,
            }

          : item

      )

    );

  }

  function clearCart() {

    setItems([]);

  }


  const cartCount = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  const total = items.reduce(
    (sum, item) => {

      const productPrice =
        item.product.price *
        item.quantity;


      const clampPrice =
        item.addClamp &&
        item.product.clamp

          ? item.product.clamp.price *
            item.quantity

          : 0;


      return (
        sum +
        productPrice +
        clampPrice
      );

    },
    0
  );

  return (

    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        total,
      }}
    >

      {children}

    </CartContext.Provider>

  );

}


export function useCart() {

  const context =
    useContext(CartContext);


  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }


  return context;

}