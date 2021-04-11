export const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.05,
      },
   },
};

export const searchBarAnimation = {
   initial: {
      y: -30,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
   },
   exit: {
      y: -30,
      opacity: 0,
   },
};

const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeIn = {
   inital: {
      y: 60,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: easing,
      },
   },
};
export const sideBarVarients = {
   initial: {
      opacity: 0,
      x: 500,
   },
   animate: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.5,
         type: "tween",
      },
   },
   exit: {
      opacity: 0,
      x: 500,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
   },
};

export const sideBarCategoriesVarients = {
   initial: {
      opacity: 0,
      x: -500,
   },
   animate: {
      opacity: 1,
      x: 0,
      transition: {
         duration: 0.5,
         type: "tween",
      },
   },
   exit: {
      opacity: 0,
      x: -500,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
   },
};

export const sideBarMoreVarients = {
   initial: {
      y: -20,
      opacity: 0,
      height: 0,
   },
   animate: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
         type: "tween",
      },
   },
   exit: { height: 0, y: 15, opacity: 0 },
};

export const sideBarMoreVarientsLi = {
   initial: {
      opacity: 0,
      y: -5,
   },
   show: {
      opacity: 1,
      y: 0,
   },
   hide: {
      y: -5,
      opacity: 1,
      transition: {
         duration: 0.1,
      },
   },
};

export const searchPageVarients = {
   initial: {
      opacity: 0,
      y: "200vh",
   },
   animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
         type: "tween",
      },
   },
   exit: {
      transition: {
         duration: 0.5,
         type: "tween",
      },
      y: "200vh",
   },
};

export const TabVariants = {
   initial: {
      x: -50,
      originX: 0,
   },
   animate: {
      x: 0,
      transition: {},
   },
   exit: {
      transition: {},
      x: -50,
      opacity: 0,
      originX: 0,
   },
};

export const TabPageChangeVariants = {
   initial: {
      x: "-100vw",
      opacity: 0,
   },
   animate: {
      x: 0,
      transition: {
         duration: 0.5,
      },
      opacity: 1,
   },
   exit: {
      transition: {
         duration: 0.3,
      },
      x: "100vw",
      opacity: 0,
   },
};

export const ChangeAddressVariants = {
   initial: {
      height: 0,
      opacity: 0,
   },
   animate: {
      height: "auto",
      transition: {
         duration: 0.5,
      },
      opacity: 1,
   },
   exit: {
      // transition: {
      //    duration: 0.3,
      // },
      height: 0,
      opacity: 0,
   },
};

export const BackToTheTopVariants = {
   initial: {
      y: "-20px",
      opacity: 0,
   },
   animate: {
      y: 0,
      transition: {
         duration: 0.3,
      },
      opacity: 1,
   },
   exit: {
      transition: {
         duration: 0.2,
      },
      y: "-20px",
      opacity: 0,
   },
};

export const ChangeCategoryVariants = {
   initial: {
      y: "-30px",
      opacity: 0,
   },
   animate: {
      y: 0,
      transition: {
         duration: 0.5,
      },
      opacity: 1,
   },
   exit: {
      transition: {
         duration: 0.2,
      },
      y: "-10px",
      opacity: 0,
   },
};

export const showMoreSortVariants = {
   initial: {
      y: "-30px",
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
   },
   exit: {
      y: "-10px",
      opacity: 0,
   },
};

export const searchbarVariants = {
   initial: {
      opacity: 0,
      width: 0,
   },
   animate: {
      opacity: 1,
      width: 250,
      transition: {
         type: "tween",
      },
   },
   exit: { opacity: 0, width: 0 },
};

export const iconVariants = {
   opened: {
      rotate: 180,
   },
   closed: {
      rotate: 0,
   },
};

export const arrowVariants = {
   opened: {
      rotate: 180,
   },
   closed: {
      rotate: 0,
   },
};

export const menuVariants = {
   initial: {
      height: 0,
      opacity: 0,
   },
   animate: {
      opacity: 1,
      height: "auto",
      transition: {
         staggerChildren: 0.3,
      },
   },
   exit: { height: 0, opacity: 0 },
};

export const linkVariants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
};
