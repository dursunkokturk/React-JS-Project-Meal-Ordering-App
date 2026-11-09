import { useCallback, useEffect, useState } from 'react'
import { fetchRecipes } from '../services/recipeService'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadRecipes = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchRecipes()
      setRecipes(data)
    } catch (err) {
      // Teknik Hata Kullanicidan Gizlendi, Sadece Gelistirici Konsolunda Gorunuyor
      if (import.meta.env.DEV) console.error(err)
      setError('The menu could not be loaded. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadRecipes()
  }, [loadRecipes])

  return { recipes, loading, error, refetch: loadRecipes }
}