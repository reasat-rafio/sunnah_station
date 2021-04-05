import { useCtx } from "../../store";
import { PaymentTotal } from "./PaymentTotal";
import { ProductCheckoutList } from "./ProductCheckoutList";

interface PaymentCheckoutProps {
   setOrderPaymentStepComplete: any;
   setAdressStepComplete: any;
   setOrderInfo: any;
   orderInfo: any;
}

export const PaymentCheckout: React.FC<PaymentCheckoutProps> = ({
   setOrderPaymentStepComplete,
   setAdressStepComplete,
   setOrderInfo,
   orderInfo,
}) => {
   const {
      cartState: { inCartProducts },
   } = useCtx();
   return (
      <div className="w-full">
         <div className="container mx-auto">
            {/* product table */}
            <div className="grid md:gap-5 gap-0  grid-cols-12 my-9">
               <div className="col-span-12 lg:col-span-8 flex flex-col">
                  {inCartProducts && inCartProducts.length > 0 && (
                     <>
                        <ProductCheckoutList />
                     </>
                  )}
               </div>

               <PaymentTotal
                  setOrderPaymentStepComplete={setOrderPaymentStepComplete}
                  setOrderInfo={setOrderInfo}
                  orderInfo={orderInfo}
                  setAdressStepComplete={setAdressStepComplete}
               />
            </div>
         </div>
      </div>
   );
};
