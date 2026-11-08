import { generatePrice } from '../utils/price'

const BASE_URL = 'https://dummyjson.com'

export const fetchRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json()

  // API'de price olmadığı için kendimiz üretiyoruz
  return data.recipes.map((recipe) => ({
    ...recipe,
    price: generatePrice(recipe.id),
  }))
}