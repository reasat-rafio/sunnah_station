import Head from "next/head";
import { useState } from "react";
import { CheckoutForm } from "../Components/checkoutPage/CheckoutForm";
import { OrederConfirmed } from "../Components/checkoutPage/OrederConfirmed";
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
      return <Redirect to="/authentication/signin" />;
   }

   const [adressStepComplete, setAdressStepComplete] = useState<boolean>(false);
   const [
      orderPaymentStepComplete,
      setOrderPaymentStepComplete,
   ] = useState<boolean>(false);
   const [orderInfo, setOrderInfo] = useState({});

   return (
      <InitialLayout>
         <Head>
            <title>Checkout | Sunnah Station</title>
         </Head>

         <section className="pt-16 md:pt-32">
            <StepBar
               adressStepComplete={adressStepComplete}
               orderPaymentStepComplete={orderPaymentStepComplete}
            />
            {!adressStepComplete && !orderPaymentStepComplete && (
               <CheckoutForm
                  orderInfo={orderInfo}
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

            {adressStepComplete && orderPaymentStepComplete && (
               <OrederConfirmed />
            )}
         </section>
      </InitialLayout>
   );
};

export default checkout;
