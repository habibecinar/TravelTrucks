import { useState } from "react";

const BookingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // dışarıya form verisi gönder
    setForm({ name: "", email: "", date: "", comment: "" }); // formu sıfırla
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book your camper</h3>

      <label>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Booking Date
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Comment
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          rows="4"
          placeholder="Your message..."
        ></textarea>
      </label>

      <button type="submit" className="btn-send">Send</button>
    </form>
  );
};

export default BookingForm;
