export const api = async (endpoint: string, options: RequestInit = {}) => {
    const res = await fetch(endpoint, options);
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    return res.json();
  };
  