import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1}}
        transition={{ duration: 0.5 }} // ~less than half a second fade
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
