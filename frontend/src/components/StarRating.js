const StarRating = ({ outof, rating }) => {
    
    return Array.from({ length: outof }, (_, i) => {
      return i + 1 <= rating ? (
        <span className="fa fa-star"></span>
      ) : i + 1 - rating === 0.5 ? (
        <span className="fa fa-star-half-o"></span>
      ) : (
        <span className="fa fa-star-o"></span>
      );
    });
  };
export default StarRating
  