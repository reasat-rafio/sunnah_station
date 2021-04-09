import { useCtx } from "../../store";

import { ProductCheckoutList } from "./ProductCheckoutList";

interface PaymentCheckoutProps {
   orderInfo: any;
   setOrderConfirmComplete: any;
   orderConfrimComplete: any;
   setOrderPaymentStepComplete: any;
   setAdressStepComplete: any;
}

export const PaymentCheckout: React.FC<PaymentCheckoutProps> = ({
   orderInfo,
   setOrderConfirmComplete,
   orderConfrimComplete,
   setOrderPaymentStepComplete,
   setAdressStepComplete,
}) => {
   const {
      cartState: { inCartProducts },
   } = useCtx();
   return (
      <div className="w-full">
         <div className="container mx-auto px-2">
            {/* product table */}
            <div className="grid md:gap-5 gap-0  grid-cols-12 my-9">
               <div className="col-span-12 flex flex-col">
                  <>
                     <ProductCheckoutList
                        orderInfo={orderInfo}
                        setOrderConfirmComplete={setOrderConfirmComplete}
                        orderConfrimComplete={orderConfrimComplete}
                        setAdressStepComplete={setAdressStepComplete}
                        setOrderPaymentStepComplete={
                           setOrderPaymentStepComplete
                        }
                     />
                  </>
               </div>
            </div>
         </div>
      </div>
   );
};
