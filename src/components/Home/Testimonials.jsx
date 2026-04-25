import React from "react";
import Button from "../UI/Button";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import Reviews from "../UI/Reviews";
import Input from "../UI/Input";
import { IoStar } from "react-icons/io5";

const Testimonials = ({ reviews }) => {
  return (
    <section className="bg-white my-8">
      <div className="container">

        {/* Rating */}
        <div className="flex gap-12 items-center py-9">
          <div>
            <h3 className="text-xl text-primary font-medium mb-5">
              Customer Reviews
            </h3>

            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
              <span className="text-secondary">
                {reviews?.length ? "Based on reviews" : "No reviews yet"}
              </span>
            </div>
          </div>

          <Button>Write a Review</Button>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-2xl text-primary font-medium pb-7">
            Reviews <span>({reviews?.length || 0})</span>
          </h3>

          <Reviews reviews={reviews} />
        </div>

        {/* Add Review */}
        <div>
          <h3 className="text-2xl font-semibold text-primary">
            Add Your Review
          </h3>

          <p className="text-lg text-secondary/70 pt-4 pb-7">
            Share your experience with this product
          </p>

          <div className="w-745 pb-8">
            <h4 className="text-lg pb-4">Name *</h4>
            <Input className="border-2 h-15" />
          </div>

          <div className="w-745 pb-8">
            <h4 className="text-lg pb-4">Email *</h4>
            <Input className="border-2 h-15" />
          </div>

          <div className="w-745 pb-8">
            <h4 className="text-lg pb-4">Review *</h4>
            <Input className="border-2 h-30" />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="text-lg font-medium">Rating</h4>
            <div className="flex text-yellow-400 gap-1">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>

          <Button className="px-14 py-4 my-10">Submit</Button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;