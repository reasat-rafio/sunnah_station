import Link from "next/link";
import { CartProductList } from "../Components/CartPage/CartproductList/CartProductList";
import { CartTotal } from "../Components/CartPage/CartTotal/CartTotal";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import { useCtx } from "../store";
import { EmptyCart } from "../utils/svgs/Svg";

interface cartProps {}

const cart: React.FC<cartProps> = ({}) => {
   const {
      cartState: { inCartProducts },
   } = useCtx();
   return (
      <InitialLayout>
         <div className="w-full  font-nav pt-16 md:pt-32">
            <div className="container mx-auto">
               <div className="grid md:gap-5 gap-0  grid-cols-12 my-9">
                  {inCartProducts && inCartProducts.length > 0 && (
                     <>
                        <CartProductList />
                        <CartTotal />
                     </>
                  )}
               </div>
               <div
                  style={{ height: "60vh" }}
                  className=" flex gap-5 flex-col justify-center items-center  my-9 font-text text-center"
               >
                  {(!inCartProducts || inCartProducts.length <= 0) && (
                     <>
                        <EmptyCart />
                        <h2 className="text-5xl font-semibold">
                           Your cart is currently empty.
                        </h2>

                        <p className="text-gray-500">
                           Before proceed to checkout you must add some products
                           to your shopping cart. You will find a lot of
                           interesting products on our "Shop" page.
                        </p>
                        <Link href="/shop">
                           <a className="bg-lightBlue hover:text-white hover:no-underline p-3 text-nav text-white font-semibold text-sm rounded-md">
                              RETURN TO SHOP
                           </a>
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};

export default cart;
