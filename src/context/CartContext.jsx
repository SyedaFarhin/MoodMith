import React, { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

// Cart Context
const CartContext = createContext();

// Initial state
const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false
};

// Action types
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  LOAD_CART: 'LOAD_CART'
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        const newTotal = calculateTotal(updatedItems);
        const newItemCount = calculateItemCount(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount
        };
      } else {
        const updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        const newTotal = calculateTotal(updatedItems);
        const newItemCount = calculateItemCount(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount
        };
      }
    }
    
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = calculateTotal(updatedItems);
      const newItemCount = calculateItemCount(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        const updatedItems = state.items.filter(item => item.id !== id);
        const newTotal = calculateTotal(updatedItems);
        const newItemCount = calculateItemCount(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      
      const newTotal = calculateTotal(updatedItems);
      const newItemCount = calculateItemCount(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount
      };
    }
    
    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0
      };
    
    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    
    case CART_ACTIONS.LOAD_CART:
      return {
        ...state,
        ...action.payload
      };
    
    default:
      return state;
  }
};

// Helper functions
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const calculateItemCount = (items) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Save cart to localStorage
const saveCartToStorage = (cartState) => {
  try {
    localStorage.setItem('moodmith_cart', JSON.stringify({
      items: cartState.items,
      total: cartState.total,
      itemCount: cartState.itemCount
    }));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('moodmith_cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
  }
  return null;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart) {
      dispatch({ type: CART_ACTIONS.LOAD_CART, payload: savedCart });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToStorage(state);
  }, [state]);

  // Action creators
  const addToCart = (product) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product });
        toast.success(`${product.name} added to cart!`);
        resolve();
      } catch (error) {
        toast.error('Failed to add to cart');
        reject(error);
      }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: productId });
    toast.success('Item removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
    toast.success('Cart cleared');
  };

  const toggleCart = () => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART });
  };

  const openCart = () => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART, payload: true });
  };

  const closeCart = () => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART, payload: false });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
export { CartContext };
