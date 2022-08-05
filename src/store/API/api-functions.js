export const getHomePageData = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/homepage");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Nie można pobrać zawartości strony domowej."
    );
  }
  return data;
};

export const getHomePageSection = async (id) => {
  const response = await fetch(`http://127.0.0.1:8000/api/homepage/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Nie można pobrać wybranej sekcji."
    );
  }

  return data
};
