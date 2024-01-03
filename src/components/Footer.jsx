import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <motion.div
      id='footer'
      className='bg-gray-800 text-white py-8 text-center'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='flex flex-col items-center justify-center'>
        
        <p className='mt-4'>
          © 2024 Afrin Haque. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
