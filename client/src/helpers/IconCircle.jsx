const IconCircle = ({ children }) => (
    <div
      className="flex items-center justify-center w-12 h-12 rounded-full
      bg-gray-700 text-gray-500 bg-opacity-45 
      hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
    </div>
  );
  export default IconCircle;