import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * LoadingSpinner
 * Displays a purple-themed spinner and navigates to a target route after a delay.
 * @param {string} to - Route to navigate to after loading (optional)
 * @param {number} delay - Delay in ms before navigation (default: 1200)
 */
export function LoadingSpinner({ to, delay = 1200 }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (to) {
      const timer = setTimeout(() => {
        navigate(to);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [navigate, to, delay]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-700 border-b-4 border-purple-600"></div>
      <span className="ml-4 text-purple-700 text-xl font-semibold">Loading ...</span>
    </div>
  );
}