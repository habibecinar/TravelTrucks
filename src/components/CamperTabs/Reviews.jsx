import "./Features.css";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="reviews-container">
        <p style={{ color: "#475467", fontSize: "16px", textAlign: "center", padding: "40px 0" }}>
          No reviews available yet.
        </p>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? '' : 'empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="reviewer-avatar">
            {getInitials(review.reviewer_name)}
          </div>
          <div className="review-content">
            <div className="review-header">
              <h4 className="reviewer-name">{review.reviewer_name}</h4>
              <div className="review-stars">
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
            <p className="review-text">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
