import { InfoSvg } from "../svgs/Svg";

interface InPageToastProps {
   text: string;
}

export const InPageToast: React.FC<InPageToastProps> = ({ text }) => {
   return (
      <div className="flex gap-2 my-6  bg-nevyBlue text-white p-4 rounded-sm items-center font-nav">
         <span>
            <InfoSvg />
         </span>
         <p className="text-green-100">{text}</p>
      </div>
   );
};
