import { useState } from 'react'
import {
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  getTotalItems,
  getTotalPrice,
} from '../utils/cartUtils'

export default function useCart() {
  const [cart, setCart] = useState([])

  const addToCart = (recipe) => setCart((prev) => addItem(prev, recipe))
  const increaseQuantity = (id) => setCart((prev) => increaseItem(prev, id))
  const decreaseQuantity = (id) => setCart((prev) => decreaseItem(prev, id))
  const removeFromCart = (id) => setCart((prev) => removeItem(prev, id))
  const clearCart = () => setCart([])

  return {
    cart,
    totalItems: getTotalItems(cart),
    totalPrice: getTotalPrice(cart),
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  }
}