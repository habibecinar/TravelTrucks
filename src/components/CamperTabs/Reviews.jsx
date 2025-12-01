const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0)
    return <p>No reviews available.</p>;

  return (
    <div className="reviews">
      <h3>Reviews</h3>

      {reviews.map((r) => (
        <div key={r.reviewer_name} className="review-card">
          <h4>{r.reviewer_name}</h4>
          <p>Rating: {r.reviewer_rating}</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
