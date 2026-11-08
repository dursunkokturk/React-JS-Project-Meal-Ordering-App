export const generatePrice = (id) => {
  const base = (id * 7 + 13) % 25
  return Number((base + 5 + 0.99).toFixed(2))
}

export const formatPrice = (value) => `$${value.toFixed(2)}`