import { InitialLayout } from "../Layouts/InitialLayout";

interface OrederConfirmedProps {}

export const OrederConfirmed: React.FC<OrederConfirmedProps> = ({}) => {
   return (
      <InitialLayout>
         <div className="w-full">
            <div className="container mx-auto">
               {/* ORDER CONFIRM MESSAGE */}
               <div className="grid grid-cols-12">
                  <div className="col-span-12 flex justify-center items-start border-dotted border-lightBlue p-3">
                     <h1 className="text-lightBlue font-title font-semibold">
                        Thank you. Your order has been received
                     </h1>
                  </div>
                  <div className="col-span-12 grid grid-cols-12">
                     <div className="grid-cols-6 lg:grid-cols-4">
                        <p>Order number</p>
                        <p></p>
                     </div>
                  </div>
                  <div className="col-span-12 grid grid-cols-12">
                     <div className="grid-cols-6 lg:grid-cols-4">
                        <p>Date:</p>
                        <p></p>
                     </div>
                  </div>
                  <div className="col-span-12 grid grid-cols-12">
                     <div className="grid-cols-6 lg:grid-cols-4">
                        <p>Total:</p>
                        <p></p>
                     </div>
                  </div>
                  <div className="col-span-12 grid grid-cols-12">
                     <div className="grid-cols-6 lg:grid-cols-4">
                        <p>Payment method</p>
                        <p></p>
                     </div>
                  </div>
               </div>

               <p>
                  Thank you for your order. We will check and give you update as
                  soon as possible
               </p>

               <div>
                  <h2 className="">ORDER DETAILS</h2>
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};
