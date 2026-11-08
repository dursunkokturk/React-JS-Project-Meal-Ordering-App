import RecipeCard from './RecipeCard'

export default function RecipeList({
  recipes,
  cart,
  onAdd,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="food-card">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          cartItem={cart.find((item) => item.id === recipe.id)}
          onAdd={onAdd}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  )
}