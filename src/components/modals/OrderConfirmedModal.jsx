import { formatPrice } from '../../utils/price'

export default function OrderConfirmedModal({ cart, totalPrice, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-icon">✔</div>
        <h2 className="modal-title">Order Confirmed</h2>
        <p className="modal-subtitle">We hope it made your day!</p>

        <div className="modal-items">
          {cart.map((item) => (
            <div key={item.id} className="modal-item">
              <img
                src={item.image}
                alt={item.name}
                className="modal-item-img"
                referrerPolicy="no-referrer"
              />
              <div className="modal-item-info">
                <p className="modal-item-name">{item.name}</p>
                <span className="modal-item-quantity">{item.quantity}x</span>
                <span className="modal-item-unit-price">
                  @ {formatPrice(item.price)}
                </span>
              </div>
              <span className="modal-item-total">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}

          <div className="modal-total">
            <span>Order Total</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
        </div>

        <button className="modal-btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  )
}