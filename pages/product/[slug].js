import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div
          className="flex flex-col lg:flex-row md:px-10 gap-[50px]
        lg:gap-[100px]"
        >
          {/* left column start */}
          <div
            className="w-full md:w-auto flex-[1.5] max-w-[500px]
        lg:max-w-full mx-auto lg:mx-0"
          >
            <ProductDetailsCarousel></ProductDetailsCarousel>
          </div>
          {/* left column start */}
          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* product price */}
            <div className="text-lg font-semibold">MRP : 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Product Size range start */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div
                  className="text-md font-medium text-black/[0.5]
              cursor-pointer"
                >
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}
              {/* SIZE START */}
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 6
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 6.5
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 7
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 7.5
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 8
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 8.5
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 9
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 9.5
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 10
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium hover:border-black cursor-pointer"
                >
                  UK 10.5
                </div>
                <div
                  className="border rounded-md text-center py-3 
                 font-medium cursor-not-allowed bg-black/[0.1] opacity-50"
                >
                  UK 11
                </div>
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SHOW ERROR END */}
            </div>
            {/* Product size range End */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white
            text-lg font-medium transition-transform active:scale-95 mb-3
            hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button
              className="w-full py-4 rounded-full border border-black
            text-lg font-medium transition-transform active:scale-95 flex
            items-center justify-center gap-2 hover:opacity-75 mb-10"
            >
              Whishlist
              <IoMdHeartEmpty size={20}></IoMdHeartEmpty>
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Feel unbeatable from the tea box to the final putt in a design
                it that's pure early MJ: speed, class and laden with true early
                '90s touches like visible Air and a translucent rubber sole that
                continue to stand the test of time.This model fuses the strut of
                1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
              <div className="text-md mb-5">
                Feel unbeatable from the tea box to the final putt in a design
                it that's pure early MJ: speed, class and laden with true early
                '90s touches like visible Air and a translucent rubber sole that
                continue to stand the test of time.This model fuses the strut of
                1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedProducts></RelatedProducts>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
