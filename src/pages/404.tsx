import { Error404 } from "../Components/404/Error404";
import { InitialLayout } from "../Components/Layouts/InitialLayout";

const FourOhFour = () => {
   return (
      <InitialLayout>
         <div className="w-full">
            <div className="container mx-auto">
               <div className="pt-16 md:pt-32">
                  <Error404 />
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};

export default FourOhFour;
