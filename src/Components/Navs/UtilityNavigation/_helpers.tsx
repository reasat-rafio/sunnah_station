//  Facebook icons
const FBSvg = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="17"
         height="17"
         viewBox="0 0 24 24"
         fill="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-facebook"
      >
         <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
   );
};
// Mail
export const GmailSvg = () => {
   return (
      <svg
         width="16"
         height="16"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 20 20"
         fill="currentColor"
      >
         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
   );
};

// Phone
export const PhoneSvg = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="currentColor"
      >
         <path d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z"></path>
      </svg>
   );
};

// utility nav options
export const leftSideUtilities = [
   { name: "FAQS", link: "/faqs" },
   { name: <FBSvg />, link: "#" },
   { name: <GmailSvg />, link: "mailto:sunnah.station.bd@gmail.com" },
   {
      name: "01779011690",
      icon: <PhoneSvg />,
   },
];
