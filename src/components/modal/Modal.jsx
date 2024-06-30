import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ closeModal, onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [colorId, setColorId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date}T${startTime}`),
      dateTo: new Date(`${date}T${endTime}`),
      colorId,
    };
    onCreate(newEvent);
    closeModal();
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button onClick={closeModal} className="create-event__close-btn">
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
