import Head from "next/head";
import { useState } from "react";
import { CheckoutForm } from "../components/checkoutPage/CheckoutForm";
import { OrederConfirmed } from "../components/checkoutPage/OrederConfirmed";
import { PaymentCheckout } from "../components/checkoutPage/PaymentCheckout";
import { StepBar } from "../components/checkoutPage/StepBar";
import { InitialLayout } from "../components/Layouts/InitialLayout";
import { useCtx } from "../store";
import { CheckOutPageSvg } from "../utils/svgs/CheckOutPageSvg";
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
  const [orderPaymentStepComplete, setOrderPaymentStepComplete] =
    useState<boolean>(false);
  const [orderInfo, setOrderInfo] = useState({});
  const [orderConfrimComplete, setOrderConfirmComplete] = useState<any>({});

  return (
    <InitialLayout>
      <Head>
        <title>Checkout | Sunnah Station</title>
      </Head>

      <section className="pt-16 md:pt-32">
        <StepBar
          setAdressStepComplete={setAdressStepComplete}
          setOrderPaymentStepComplete={setOrderPaymentStepComplete}
          adressStepComplete={adressStepComplete}
          orderPaymentStepComplete={orderPaymentStepComplete}
        />
        <div>
          {!adressStepComplete && !orderPaymentStepComplete && (
            <CheckoutForm
              orderInfo={orderInfo}
              setAdressStepComplete={setAdressStepComplete}
              setOrderInfo={setOrderInfo}
            />
          )}
          {adressStepComplete && !orderPaymentStepComplete && (
            <PaymentCheckout
              setAdressStepComplete={setAdressStepComplete}
              setOrderConfirmComplete={setOrderConfirmComplete}
              setOrderPaymentStepComplete={setOrderPaymentStepComplete}
              orderConfrimComplete={orderConfrimComplete}
              orderInfo={orderInfo}
            />
          )}
          {adressStepComplete && orderPaymentStepComplete && (
            <OrederConfirmed orderConfrimComplete={orderConfrimComplete} />
          )}
        </div>
      </section>
    </InitialLayout>
  );
};

export default checkout;
