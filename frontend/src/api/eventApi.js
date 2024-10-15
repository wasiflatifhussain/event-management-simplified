const BASE_URL = 'http://localhost:8000/api';

export const getEvents = async (month) => {
  console.log("inside getEvents = ", month)
  try {
    const response = await fetch(`${BASE_URL}/events/get-events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ month }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;

  } catch (error) {
    console.error('Error fetching events:', error);
  }
}