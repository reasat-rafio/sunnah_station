export const useFilterByInput = (products: any[], inputValue) => {
   let filteredItme = products.filter((val) => {
      if (val.toLowerCase().includes(inputValue.toLowerCase())) {
         return val;
      }
   });

   return {
      filteredItme,
   };
};

export const useSearchFilter = (products: any[], inputValue) => {
   let filteredItme = products.filter(
      ({ name, img, offer_price, regular_price, slug }) => {
         if (name.toLowerCase().includes(inputValue.toLowerCase())) {
            return { name, img, offer_price, regular_price, slug };
         }
      }
   );

   return {
      filteredItme,
   };
};
