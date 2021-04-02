import {
   Art,
   Best_seelings,
   FoodSvg,
   Men,
   Others,
   ShoppingBag,
   Women,
} from "../../../utils/svgs/Svg";

export const categories = [
   {
      name: "Special Deal",
      icon: <ShoppingBag />,
      to: "/special-deals",
   },
   {
      name: "Food",
      icon: <FoodSvg />,
      to: "/shop/food",
   },
   {
      name: "Art & Aesthetic",
      icon: <Art />,
      to: "/shop/art-aesthetic",
   },
   {
      name: "Best Sellings",
      icon: <Best_seelings />,
      to: "/best-seelings",
   },
   {
      name: "Mens Wearing",
      icon: <Men />,
      to: "/shop/mens-wearings",
   },
   {
      name: "Womens Wearning",
      icon: <Women />,
      to: "/shop/womens-wearings",
   },
   {
      name: "Others",
      icon: <Others />,
      to: "/shop/others",
   },
];

export const GoLeft = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="currentColor"
      >
         <path d="M13.293 6.293L7.586 12 13.293 17.707 14.707 16.293 10.414 12 14.707 7.707z"></path>
      </svg>
   );
};

export const GoRight = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="currentColor"
      >
         <path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z"></path>
      </svg>
   );
};
