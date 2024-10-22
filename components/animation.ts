export const homeTitleVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    show: { opacity: 1, scale: 1, transition: { duration: 2 } },
  };

  export const aboutDivLogoScale = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  export const aboutDivFirstImageScale = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  
  export const homeGridItemFirstVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  
  export const homeGridItemSecondVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  
  export const homeZoomInVariants = {
    hidden: { scale: 0.2, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };
  
  export const homeSlideInFromRightVariants = {
    hidden: { x: "40vw" },
    show: { x: 0, transition: { duration: 2 } },
  };
  
  export const brandCard = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: "easeInOut", 
      },
    },
  };

  export const businessCard = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: "easeInOut", 
      },
    },
  };
  

  export const contactGridItemFirstVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  
  export const contactGridItemSecondVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  export const navVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  export const navContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };