import React from 'react';

const LoadingButton = ({ 
  isLoading, 
  loadingText, 
  defaultText, 
  icon: Icon, // Renamed to capital 'Icon' to render it as a React Component
  className = "", 
  disabled,
  ...props 
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`w-full text-white font-medium h-11 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all group ${
        isLoading 
          ? "bg-purple-400 dark:bg-purple-500/50 cursor-not-allowed opacity-80" 
          : "bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 active:scale-[0.98] cursor-pointer"
      } ${className}`} // Merges any custom classes you pass down later
      {...props}
    >
      {isLoading ? (
        <>
          {/* Reusable Spinner */}
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          <span>{defaultText}</span>
          {/* Render the icon if passed as a prop */}
          {Icon && <Icon className="text-base group-hover:translate-x-0.5 transition-transform" />}
        </>
      )}
    </button>
  );
};

export default LoadingButton;