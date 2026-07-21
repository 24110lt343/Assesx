"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleAlert, X } from "lucide-react";

export default function Popup({
  open,
  type = "success",
  title,
  message,
  onClose,
}) {
  const success = type === "success";

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.22 }}
          className="fixed top-6 right-6 z-9999"
        >
          <div className="w-95 overflow-hidden rounded-[8px] border border-white/20 bg-white/90 shadow-md backdrop-blur-xl">

            {/* Progress Timer */}
            <div className="h-1 w-full bg-neutral-200">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                className={`h-full ${
                  success ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
            </div>

            <div className="flex gap-4 p-5">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  success ? "bg-emerald-100" : "bg-red-100"
                }`}
              >
                {success ? (
                  <CheckCircle2
                    className="h-6 w-6 text-emerald-600"
                    strokeWidth={2.2}
                  />
                ) : (
                  <CircleAlert
                    className="h-6 w-6 text-red-600"
                    strokeWidth={2.2}
                  />
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-black">
                  {title}
                </h3>

                <p className="mt-1 text-[14px] leading-6 text-neutral-500">
                  {message}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-1.5 transition hover:bg-neutral-100"
              >
                <X className="h-4 w-4 text-neutral-500" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}