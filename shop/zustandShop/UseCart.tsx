// store/useCart.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export interface CartItem {
  id: string | number;
  quantity: number;

}

export interface CartState {
  cart: CartItem[];
  totalItems: number;
  add: (id: string | number) => void;
  remove: (id: string | number) => void;
  removepack: (id: string | number) => void;
  clear: () => void;
  getTotalItems: () => number;
  isInCart: (id: string | number) => boolean;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      
      totalItems: 0,

      add: (id: string | number) =>
        set((state) => {
          const found = state.cart.find((item) => item.id === id);

          if (found) {
            return {
              cart: state.cart.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              totalItems: state.totalItems + 1,
            };
          }

          return {
            cart: [...state.cart, { id, quantity: 1 }],
            totalItems: state.totalItems + 1,
          };
        }),

      remove: (id: string | number) => {
        set((prev) => {
          const findobj = prev.cart.find((item) => item.id === id);
          if (!findobj) {
            return { cart: prev.cart, totalItems: prev.totalItems };
          } else {
            if (findobj.quantity > 1) {
              return {
                cart: prev.cart.map((item) =>
                  item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
                totalItems: prev.totalItems - 1,
              };
            } else {
              return {
                cart: prev.cart.filter((item) => item.id !== id),
                totalItems: prev.totalItems - 1,
              };
            }
          }
        });
      },

      removepack: (id: string | number) =>
        set((state) => {
          const itemToRemove = state.cart.find((item) => item.id === id);
          return {
            cart: state.cart.filter((item) => item.id !== id),
            totalItems: itemToRemove 
              ? state.totalItems - itemToRemove.quantity 
              : state.totalItems,
          };
        }),

      clear: () =>
        set({
          cart: [],
          totalItems: 0,
        }),

      getTotalItems: () => {
        return get().totalItems;
      },

      isInCart: (id: string | number) => {
        return get().cart.some((item) => item.id === id);
      },
    }),
    {
      name: "cart-storage", 
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart, totalItems: state.totalItems }), 
    }
  )
);

export default useCart;