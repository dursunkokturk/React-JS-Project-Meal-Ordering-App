import EmptyBasket from '../../assets/img/empty-basket.png'
import CartItem from './CartItem'
import { formatPrice } from '../../utils/price'

export default function Cart({
  cart,
  totalItems,
  totalPrice,
  onRemove,
  onConfirm,
}) {
  return (
    <div className="order-card">
      <h2>Your Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <div className="items-card">
          <img src={EmptyBasket} alt="Empty Basket" />
          <h5>Your added items will appear here</h5>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Order Total</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>
            <button className="confirm-btn" onClick={onConfirm}>
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  )
}