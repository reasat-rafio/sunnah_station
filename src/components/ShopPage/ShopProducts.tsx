import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useCtx } from "../../store";
import {
  addFirstItemToTheCart,
  addNonExistingItemInTheCart,
  plusTheQuantityOfTheExistingItem,
} from "../../store/actions/CartAction";
import { showCart } from "../../store/actions/domActions";
import { fadeIn, stagger } from "../../../utils/motion/animation";
import { CardImage } from "../common/card/product-images";
import { FilterProductSection } from "./FilterProductSection";

interface ShopProductsProps {
  products: any;
  gridCount: number;
  setGridCount: any;
  showMoreFilter: boolean;
  setShowMoreFilter: any;
  selectedFilter: string;
  setSelectedFilter: any;
}

export const ShopProducts: React.FC<ShopProductsProps> = ({
  products,
  gridCount,
  setGridCount,
  showMoreFilter,
  setShowMoreFilter,
  selectedFilter,
  setSelectedFilter,
}) => {
  const router = useRouter();

  const [allProducts, setAllProducts] = useState<any>([...products]);

  // GLOBAL STATE
  const {
    domState: { pageWidth },
    domDispatch,
    cartState: { inCartProducts },
    cartDispatch,
  } = useCtx();

  const [loading, setLoading] = useState(false);
  const [pgWidth, setPgWidth] = useState<string>("");

  // swiper slidesPerView
  const [cardsPerView, setCardsPerView] = useState<number>(6);

  // selected  product qunatity
  const [productQuantity, setProductQuantity] = useState<number>(1);

  // Modal state
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({});

  // show more action
  const [showActions, setShowMoreActions] = useState<any>([]);

  useEffect(() => {
    if (pageWidth > 1180) {
      setPgWidth("lg");
      setCardsPerView(5);
      setLoading(false);
    } else if (pageWidth < 1180 && pageWidth > 720) {
      setCardsPerView(4);
      setPgWidth("md");
      setLoading(false);
    } else if (pageWidth < 720 && pageWidth > 550) {
      setCardsPerView(2);
      setPgWidth("sm");
      setLoading(false);
    } else if (pageWidth < 550 && pageWidth > 0) {
      setCardsPerView(2);
      setPgWidth("xs");
      setLoading(false);
    } else if (pageWidth == 0) {
      setLoading(true);
      setCardsPerView(5);
    }
  }, [pageWidth]);

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const productPerPage = 12;
  const PagesVisited = pageNumber * productPerPage;

  // adding a new value to every object to add the cart hover action
  useEffect(() => {
    allProducts.forEach((deal) => (deal.showAction = false));
    const initalState = allProducts.map((deal) => deal.showAction);
    setShowMoreActions(initalState);
  }, [products]);

  // Mouse Enter event on Card
  const handleMouseEnter = (i) => {
    const newArr = [...allProducts.map((deal) => deal.showAction)];
    newArr[i] = true;
    setShowMoreActions(newArr);
  };

  // Mouse Leave event on Card
  const handleMouseleave = (i) => {
    const newArr = [...allProducts.map((deal) => deal.showAction)];
    newArr[i] = false;
    setShowMoreActions(newArr);
  };

  // Adding product to the cart
  const addToTheCartAction = (name, price, quantity, id, img) => {
    const item = {
      name,
      price,
      quantity,
      id,
      img,
      subtotal: parseInt(price.replace(/,/g, ""), 10),
    };

    const _itemToTheCart = {
      name,
      price,
      quantity,
      id,
      img,
      subtotal: parseInt(price.replace(/,/g, ""), 10) * quantity,
    };

    domDispatch(showCart());

    if (inCartProducts && inCartProducts.length > 0) {
      let itemExistInTheCart = inCartProducts.some((i) => i.id === id);

      if (itemExistInTheCart) {
        // If that item exist in the cart
        cartDispatch(plusTheQuantityOfTheExistingItem({ id, quantity }));
      } else {
        // If that item dont exist in the cart
        cartDispatch(addNonExistingItemInTheCart(item));
      }
    } else {
      // If there is no item in the cart
      cartDispatch(addFirstItemToTheCart(_itemToTheCart));
    }
    setProductQuantity(1);
  };

  // SHORTING THE PRODUCTS. PS:ALL THE SORTING AND FILTERING HAPPENING HERE
  const displayProrducts = () => {
    return (
      allProducts &&
      allProducts.length > 0 &&
      allProducts
        .sort((a, b) => {
          if (selectedFilter === "Sort by popularity") {
            return a.highlight === b.highlight ? 0 : a.highlight ? -1 : 1;
          }
          if (selectedFilter === "Sort by latest") {
            return a.createdAt > b.createdAt ? -1 : 1;
          }
          if (selectedFilter === "Sort by Price: low to high") {
            if (a.offer_price && b.offer_price) {
              return parseInt(a.offer_price.replace(/,/g, ""), 10) <
                parseInt(b.offer_price.replace(/,/g, ""), 10)
                ? -1
                : 1;
            } else {
              return parseInt(a.regular_price) < parseInt(b.regular_price)
                ? -1
                : 1;
            }
          }
          if (selectedFilter === "Sort by Price: high to low") {
            if (a.offer_price && b.offer_price) {
              return parseInt(a.offer_price.replace(/,/g, ""), 10) >
                parseInt(b.offer_price.replace(/,/g, ""), 10)
                ? -1
                : 1;
            } else {
              return parseInt(a.regular_price) > parseInt(b.regular_price)
                ? -1
                : 1;
            }
          }
        })
        .slice(PagesVisited, PagesVisited + productPerPage)
        .map(
          (
            {
              name,
              image,
              offer_price,
              regular_price,
              id,
              slug,
              short_description,
            },
            i: number
          ) => {
            return (
              <motion.div
                className={`col-span-6 lg:col-span-4 xl:col-span-3 border cursor-pointer    rounded-xl md:h-80  text-center hover:shadow-2xl  transition-all duration-150  my-6 flex flex-col  relative  ${
                  pgWidth == "sm" && "h-smCard"
                } ${pgWidth == "xs" && "h-smCard"}`}
                key={id}
                onClick={() => router.push(`/items/${slug}`)}
              >
                <div className="flex-1">
                  <CardImage image={image} name={name} />
                </div>

                <div className="p-3 ">
                  <p className="text-sm font-medium text-center font-nav">
                    {name}
                  </p>
                  {offer_price ? (
                    <div className="my-2 flex gap-2 items-center justify-center">
                      <span className="line-through  text-sm text-gray-400 font-text">
                        ৳{regular_price}
                      </span>
                      <span className="text-lightBlue font-semibold font-text">
                        ৳{offer_price}
                      </span>
                    </div>
                  ) : (
                    <div className="my-2 flex gap-2 items-center justify-center">
                      <span className="text-lightBlue font-semibold font-text">
                        ৳{regular_price}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          }
        )
    );
  };

  // PAGINATION
  const pageCount = Math.ceil(allProducts.length / productPerPage);
  const chnagePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {/* filter section */}
      <FilterProductSection
        showMoreFilter={showMoreFilter}
        setShowMoreFilter={setShowMoreFilter}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {/* ----- PRODUCTS OUTPUT SECTION ----- */}

      <motion.div className="flex flex-col " initial="inital" animate="animate">
        <motion.div
          className="grid grid-cols-12 my-5 gap-2 flex-1"
          variants={fadeIn}
        >
          {displayProrducts()}
        </motion.div>
        <span className="mx-auto flex ">
          <ReactPaginate
            previousLabel={"← Prev"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            onPageChange={chnagePage}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </span>
      </motion.div>
    </>
  );
};
