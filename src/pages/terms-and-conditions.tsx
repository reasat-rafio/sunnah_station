import axios from "axios";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../components/Layouts/InitialLayout";
import gfm from "remark-gfm";

const TermsAndConditions = ({ data }) => {
  return (
    <InitialLayout>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="pt-16 md:pt-32">
            {data && (
              <ReactMarkdown
                className="prose max-w-none"
                plugins={[gfm]}
                children={data.term_and_condition}
                escapeHtml={false}
              />
            )}
          </div>
        </div>
      </div>
    </InitialLayout>
  );
};

export default TermsAndConditions;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/term-and-condition`
  );

  return {
    props: {
      data,
    },
  };
};
