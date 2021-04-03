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
      ({
         name,
         image,
         offer_price,
         regular_price,
         slug,
         short_description,
      }) => {
         if (name.toLowerCase().includes(inputValue.toLowerCase())) {
            return {
               name,
               image,
               offer_price,
               regular_price,
               slug,
               short_description,
            };
         }
      }
   );

   return {
      filteredItme,
   };
};
