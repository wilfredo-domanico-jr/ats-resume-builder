import { useState, useCallback } from "react";

export interface ToastItem {
  id: string;
  icon: string;
  msg: string;
  isFadingOut: boolean;
}

export function useToasts() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((icon: string, msg: string) => {
    const id = crypto.randomUUID();

    // Add the new toast to the list
    setToasts((prev) => [...prev, { id, icon, msg, isFadingOut: false }]);

    // Start the fade-out CSS animation at 2.5 seconds
    // setTimeout(() => {
    //   setToasts((prev) =>
    //     prev.map((t) => (t.id === id ? { ...t, isFadingOut: true } : t)),
    //   );

    //   //  Remove the toast completely from the DOM after the animation completes (300ms)
    //   setTimeout(() => {
    //     setToasts((prev) => prev.filter((t) => t.id !== id));
    //   }, 300);
    // }, 2500);
  }, []);

  return { toasts, showToast };
}
