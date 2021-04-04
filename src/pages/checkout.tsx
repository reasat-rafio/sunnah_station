import Head from "next/head";
import { useState } from "react";
import { CheckoutForm } from "../Components/checkoutPage/CheckoutForm";
import { PaymentCheckout } from "../Components/checkoutPage/PaymentCheckout";
import { StepBar } from "../Components/checkoutPage/StepBar";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import { useCtx } from "../store";
import { Notify } from "../utils/Toast";
import { Redirect } from "../utils/_components/Redirect";

const checkout = () => {
   const {
      userState: { isLoggedIn },
      cartState: { inCartProducts },
   } = useCtx();

   if (!isLoggedIn) {
      Notify("info", "Please signin to access cheeckout");
      return <Redirect to="/authentication/register" />;
   }
   if (inCartProducts.length < 1) {
      Notify("info", "Your cart is empty");
      return <Redirect to="/shop" />;
   }

   const [adressStepComplete, setAdressStepComplete] = useState<boolean>(false);
   const [
      orderPaymentStepComplete,
      setOrderPaymentStepComplete,
   ] = useState<boolean>(false);
   const [orderInfo, setOrderInfo] = useState({});
   console.log(orderInfo);

   return (
      <InitialLayout>
         <Head>
            <title>Checkout | Sunnah Station</title>
         </Head>

         <div className="pt-16 md:pt-32">
            <StepBar
               adressStepComplete={adressStepComplete}
               orderPaymentStepComplete={orderPaymentStepComplete}
            />
            {!adressStepComplete && !orderPaymentStepComplete && (
               <CheckoutForm
                  setAdressStepComplete={setAdressStepComplete}
                  setOrderInfo={setOrderInfo}
               />
            )}
            {adressStepComplete && !orderPaymentStepComplete && (
               <PaymentCheckout
                  orderInfo={orderInfo}
                  setOrderInfo={setOrderInfo}
                  setAdressStepComplete={setAdressStepComplete}
                  setOrderPaymentStepComplete={setOrderPaymentStepComplete}
               />
            )}
         </div>
      </InitialLayout>
   );
};

export default checkout;
