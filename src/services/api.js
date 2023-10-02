export const apiRequest = (path, options) =>
  fetch(`${process.env.REACT_APP_API_ROOT}${path}`, options).then(
    async (response) => {
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || 'Something went wrong!');
      }

      return payload;
    }
  );
