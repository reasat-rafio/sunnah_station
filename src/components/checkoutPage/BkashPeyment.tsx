import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { sideBarMoreVarients } from "../../../utils/motion/animation";

interface BkashPeymentProps {
  setTransactionId: any;
}

export const BkashPeyment: React.FC<BkashPeymentProps> = ({
  setTransactionId,
}) => {
  const [showNumber, setShowBikashNumber] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("01720333596");

  const allNumner = ["01720333596"];

  return (
    <motion.div
      variants={sideBarMoreVarients}
      initial="inital"
      animate="animate"
      exit="exit"
      className="my-9 "
    >
      <Image
        src="https://res.cloudinary.com/dapjxqk64/image/upload/v1618150455/sunnah%20statoin/01720333596_-_8_20_54_AM_Apr_11_2021_mjgi5f.png"
        alt="bkash barcode"
        layout="intrinsic"
        height="800"
        width="400"
      />

      <div className="flex flex-col gap-3">
        <div>
          <h5>How to pay</h5>
          <p>→ Open Bkash App, Select “Send Money” </p>
          <p>→ Scan QR CODE or Enter Our Bkash Number 0170000000 </p>
          <p>→ Input Exact Total Amount</p>
          <p>
            → After sending money, enter the Bkash Transaction ID below field ↧
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Our Bkash Numbers
          </label>
        </div>
        {/* Bkash number */}
        <div className="mt-1 relative">
          <button
            type="button"
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-lightBlue sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={() => setShowBikashNumber((prev) => !prev)}
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">{number}</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          {showNumber && (
            <ul
              className="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm z-10"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              {allNumner.map((num: string, i: number) => (
                <li
                  onClick={() => {
                    setNumber(num);
                    setShowBikashNumber(false);
                  }}
                  key={i}
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      {num}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <label className="block ">
          <span className="text-gray-700">
            Transaction ID <span className="text-red-500">*</span>
          </span>
          <input
            onChange={(e) => setTransactionId(e.target.value)}
            type="text"
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-lightBlue sm:text-sm "
            placeholder="Enter bKash Transaction ID"
            required
          />
        </label>
      </div>
    </motion.div>
  );
};
