
import './Toast.css'


type ToastProps = {
  icon: string;
  message: string;
};

function Toast({ icon , message } : ToastProps) {
  return (
    <>
    <div className="toast-wrap">
      <div className="toast">
        <span className="toast-icon">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
    </>
  )
}

export default Toast
