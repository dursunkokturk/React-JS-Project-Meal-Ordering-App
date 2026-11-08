import { useState } from 'react'
import './App.css'

import useRecipes from './hooks/useRecipes'
import useCart from './hooks/useCart'

import LoadingScreen from './components/common/LoadingScreen'
import ErrorScreen from './components/common/ErrorScreen'
import RecipeList from './components/recipes/RecipeList'
import Cart from './components/cart/Cart'
import OrderConfirmedModal from './components/modals/OrderConfirmedModal'
import ThankYouModal from './components/modals/ThankYouModal'

export default function App() {
  const { recipes, loading, error, refetch } = useRecipes()
  const {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart()

  const [showModal, setShowModal] = useState(false)
  const [showThankyou, setShowThankyou] = useState(false)

  const handleConfirmOrder = () => {
    setShowModal(false)
    clearCart()
    setShowThankyou(true)
  }

  const handleNewOrder = () => {
    setShowThankyou(false)
    refetch()
  }

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error} onRetry={refetch} />

  return (
    <>
      {showModal && (
        <OrderConfirmedModal
          cart={cart}
          totalPrice={totalPrice}
          onClose={handleConfirmOrder}
        />
      )}

      {showThankyou && <ThankYouModal onNewOrder={handleNewOrder} />}

      <div className="container">
        <div className="general-title">
          <h1>Meals</h1>
        </div>

        <div className="food-card-and-order-card">
          <RecipeList
            recipes={recipes}
            cart={cart}
            onAdd={addToCart}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />

          <Cart
            cart={cart}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onRemove={removeFromCart}
            onConfirm={() => setShowModal(true)}
          />
        </div>
      </div>
    </>
  )
}