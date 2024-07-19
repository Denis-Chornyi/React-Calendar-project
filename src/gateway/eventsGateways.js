const baseUrl = 'https://6613d8a753b0d5d80f6885e7.mockapi.io/api/v7/events';

export const createEvent = eventDate =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(eventDate)
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Internal Server Error. Can't display events`);
    }
  });

export const fetchEvent = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json().then(events =>
        events.map(event => ({
          ...event,
          dateFrom: new Date(event.dateFrom),
          dateTo: new Date(event.dateTo)
        }))
      );
    }
    throw new Error(`Internal Server Error. Can't display events`);
  });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Internal Server Error. Can't display events`);
    }
  });
