const baseUrl = "https://6613d8a753b0d5d80f6885e7.mockapi.io/api/v7/events";

export const createEvent = (eventDate) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventDate),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
  });

export const fetchEvent = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

export const updateEvent = (eventId, eventData) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create event");
    }
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete event");
    }
  });
