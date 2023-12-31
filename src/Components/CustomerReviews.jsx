import ReviewCard from "../Customs/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Are Saying ?
      </h3>
      <p className="info-text m-auto mt-2 max-w-lg text-center">
        Hear it from our customers who have had a great shopping experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review) => (
             <ReviewCard key={review.customerName} {...review} />
          ))
        }
      </div>
    </section>
  );
};

export default CustomerReviews;
