import { formatPrice } from '../../utils/price'

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>

        <div className="cart-item-bottom">
          <div className="cart-quantity-controls">
            <span className="quantity-count">{item.quantity}x</span>
          </div>
          <span className="cart-item-price">
            @ {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
      <button className="remove-button" onClick={() => onRemove(item.id)}>
        x
      </button>
    </div>
  )
}