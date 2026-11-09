import ShoppingCard from '../../assets/img/shopping-card.png'

export default function RecipeCard({
  recipe,
  cartItem,
  onAdd,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="product-informations">
      <div className="image-wrapper">
        <img
          src={recipe.image}
          className={`product-photo ${cartItem ? 'product-photo-active' : ''}`}
          alt={recipe.name}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {!cartItem ? (
          <button className="add-to-cart-button" onClick={() => onAdd(recipe)}>
            <img src={ShoppingCard} alt="Shopping Card" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              className="cart-quantity-button"
              onClick={() => onDecrease(recipe.id)}
            >
              -
            </button>
            <span className="quantity-count">{cartItem.quantity}</span>
            <button
              className="cart-quantity-button"
              onClick={() => onIncrease(recipe.id)}
            >
              +
            </button>
          </div>
        )}
      </div>

      <h5>{recipe.cuisine}</h5>
      <h4>{recipe.name}</h4>
      <h4>${recipe.price}</h4>
    </div>
  )
}