// Hepsi saf fonksiyon: (cart, ...args) => yeniCart

export const addItem = (cart, recipe) => {
  const existing = cart.find((item) => item.id === recipe.id)

  if (existing) {
    return cart.map((item) =>
      item.id === recipe.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  }
  return [...cart, { ...recipe, quantity: 1 }]
}

export const increaseItem = (cart, id) =>
  cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  )

export const decreaseItem = (cart, id) => {
  const existing = cart.find((item) => item.id === id)
  if (!existing) return cart

  if (existing.quantity === 1) {
    return cart.filter((item) => item.id !== id)
  }
  return cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  )
}

export const removeItem = (cart, id) => cart.filter((item) => item.id !== id)

export const getTotalItems = (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalPrice = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0)