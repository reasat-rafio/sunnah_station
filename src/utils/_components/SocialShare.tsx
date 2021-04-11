import {
   EmailShareButton,
   FacebookShareButton,
   LinkedinShareButton,
   RedditShareButton,
   TwitterShareButton,
   WhatsappShareButton,
   EmailIcon,
   FacebookIcon,
   LinkedinIcon,
   RedditIcon,
   TwitterIcon,
   WhatsappIcon,
} from "react-share";

interface SocialShareProps {
   slug: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ slug }) => {
   console.log(process.env.NEXT_PUBLIC_URL);

   return (
      <>
         <FacebookShareButton url={`/items/${slug}`}>
            <FacebookIcon
               lightingColor="white"
               round={true}
               size={30}
            ></FacebookIcon>
         </FacebookShareButton>

         <TwitterShareButton url={`/items/${slug}`}>
            <TwitterIcon
               lightingColor="white"
               round={true}
               size={30}
            ></TwitterIcon>
         </TwitterShareButton>

         <RedditShareButton url={`/items/${slug}`}>
            <RedditIcon
               lightingColor="white"
               round={true}
               size={30}
            ></RedditIcon>
         </RedditShareButton>

         <EmailShareButton url={`/items/${slug}`}>
            <EmailIcon lightingColor="white" round={true} size={30}></EmailIcon>
         </EmailShareButton>

         <LinkedinShareButton url={`/items/${slug}`}>
            <LinkedinIcon
               lightingColor="white"
               round={true}
               size={30}
            ></LinkedinIcon>
         </LinkedinShareButton>

         <WhatsappShareButton url={`/items/${slug}`}>
            <WhatsappIcon
               lightingColor="white"
               round={true}
               size={30}
            ></WhatsappIcon>
         </WhatsappShareButton>
      </>
   );
};
