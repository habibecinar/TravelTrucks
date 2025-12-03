import { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success notification
    setShowSuccess(true);
    
    // If onSubmit prop provided, call it
    if (onSubmit) {
      onSubmit(form);
    }
    
    // Reset form
    setForm({ name: "", email: "", date: "", comment: "" });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="booking-form-container">
      {showSuccess && (
        <div className="success-notification">
          🎉 Booking request submitted successfully! We'll contact you soon.
        </div>
      )}
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Book your camper now</h3>
        <p className="form-subtitle">Stay connected! We are always ready to help you.</p>

        <div className="form-group">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            rows="4"
            placeholder="Comment"
            className="form-textarea"
          ></textarea>
        </div>

        <button type="submit" className="btn-send">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
