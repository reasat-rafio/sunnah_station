import { Error404 } from "../components/404/Error404";

const FourOhFour = () => {
  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="pt-16 md:pt-32">
            <Error404 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
