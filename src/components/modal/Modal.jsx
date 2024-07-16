import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ closeModal, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newEvent = {
      title: formData.title,
      description: formData.description,
      dateFrom: new Date(`${formData.date}T${formData.startTime}`),
      dateTo: new Date(`${formData.date}T${formData.endTime}`)
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
              value={formData.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={formData.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={formData.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formData.description}
              onChange={handleChange}
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
