import { generatePrice } from '../utils/price'

const BASE_URL = 'https://dummyjson.com'
const TIMEOUT_MS = 8000

const isHttps = (url) => {
  try {
    return new URL(url).protocol === 'https:'
  } catch {
    return false
  }
}

// Dış API'den gelen verinin tamamı değil sadece ihtiyaç duyulan alanlar, doğru tiple alındı
const sanitizeRecipe = (recipe) => {
  const id = Number(recipe.id)
  if (!Number.isFinite(id)) return null
  return {
    id,
    name: String(recipe.name ?? ''),
    cuisine: String(recipe.cuisine ?? ''),
    image: isHttps(recipe.image) ? recipe.image : '',
    price: generatePrice(id),
  }
}

export const fetchRecipes = async () => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(`${BASE_URL}/recipes`, {
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    const data = await response.json()
    if (!Array.isArray(data?.recipes)) {
      throw new Error('Unexpected response format')
    }

    return data.recipes.map(sanitizeRecipe).filter(Boolean)
  } finally {
    clearTimeout(timer)
  }
}