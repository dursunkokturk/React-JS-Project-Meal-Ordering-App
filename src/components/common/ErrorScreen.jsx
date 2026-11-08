export default function ErrorScreen({ message, onRetry }) {
  return (
    <div className="status-screen">
      <p className="error-icon">⚠️</p>
      <p className="error-message">Created An Error: {message}</p>
      <button className="retry-button" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}