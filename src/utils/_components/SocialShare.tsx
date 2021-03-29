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
   return (
      <>
         <FacebookShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <FacebookIcon
               lightingColor="white"
               round={true}
               size={30}
            ></FacebookIcon>
         </FacebookShareButton>

         <TwitterShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <TwitterIcon
               lightingColor="white"
               round={true}
               size={30}
            ></TwitterIcon>
         </TwitterShareButton>

         <RedditShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <RedditIcon
               lightingColor="white"
               round={true}
               size={30}
            ></RedditIcon>
         </RedditShareButton>

         <EmailShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <EmailIcon lightingColor="white" round={true} size={30}></EmailIcon>
         </EmailShareButton>

         <LinkedinShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <LinkedinIcon
               lightingColor="white"
               round={true}
               size={30}
            ></LinkedinIcon>
         </LinkedinShareButton>

         <WhatsappShareButton url={`${process.env.NEXTAUTH_URL}/items/${slug}`}>
            <WhatsappIcon
               lightingColor="white"
               round={true}
               size={30}
            ></WhatsappIcon>
         </WhatsappShareButton>
      </>
   );
};
