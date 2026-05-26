import "./ToastContainer.css";
import type { ToastItem } from "../../hooks/useToasts";

type ToastContainerProps = {
  toasts: ToastItem[];
};

function Toast({ toasts }: ToastContainerProps) {
  return (
    <>
      <div className="toast-wrap">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast ${toast.isFadingOut ? "fade-out" : ""}`}
          >
            <span className="toast-icon" style={{ marginRight: "8px" }}>
              {toast.icon}
            </span>
            <span>{toast.msg}</span>
          </div>
        ))}

        {/* <div className="toast">
          <span className="toast-icon">{icon}</span>
          <span>{message}</span>
        </div> */}
      </div>
    </>
  );
}

export default Toast;
