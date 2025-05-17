import { motion } from "framer-motion";
const BackgroundVideo = ({ title, description, extraContent }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex items-center justify-between h-full px-6 md:px-20">
        {/* Left Side: Text */}
        <div className="max-w-2xl text-left space-y-12">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-300"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Right Side: Conditional Card */}
        {extraContent && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block max-w-md p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-md shadow-lg"
          >
            {extraContent}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BackgroundVideo;
