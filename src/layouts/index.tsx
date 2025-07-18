import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet, useLocation } from '@umijs/max';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { x: -20 },
  animate: { x: 0, transition: { duration: 0.5 } },
  exit: { x: -20, transition: { duration: 0.5 } },
};

export default () => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};
