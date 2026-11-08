export default function ThankYouModal({ onNewOrder }) {
  return (
    <div className="thankyou-overlay">
      <div className="thankyou-card">
        <div className="thankyou-icon">✔</div>
        <h2 className="thankyou-title">Thank You!</h2>
        <p className="thankyou-subtitle">
          Your order has been received. Enjoy your meal! 🍽️
        </p>
        <button className="thankyou-button" onClick={onNewOrder}>
          Place A New Order
        </button>
      </div>
    </div>
  )
}