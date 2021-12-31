import Lottie from "react-lottie";
import * as fourOFour from "./44191-404-animation-1.json";
interface Error404Props {}

const Error: any = fourOFour;

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: Error.default,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
   },
};

export const Error404: React.FC<Error404Props> = ({}) => {
   return (
      <div>
         <Lottie options={defaultOptions} height={"60vh"} width={"60vw"} />
      </div>
   );
};
