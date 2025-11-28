const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews?.map((rev, i) => (
        <div key={i} className="review-box">
          <div className="avatar">{rev.reviewer[0]}</div>
          <h4>{rev.reviewer}</h4>
          <p>{"⭐".repeat(rev.rating)}</p>
          <p>{rev.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
