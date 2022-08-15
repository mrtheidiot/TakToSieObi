const FETCH_DOMAIN =
  "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app";

export const getCourses = async () => {
  const response = await fetch(`${FETCH_DOMAIN}/trainingCourses.json`);

  if (!response.ok) {
    throw new Error("Nie  udało się pobrać treningów!");
  }

  const data = await response.json();
  //   let transformedObjects = [];
  //   for (const key in data) {
  //     const newObj = {
  //       id: key,
  //       ...data[key],
  //     };
  //     transformedObjects.push(newObj);
  //   }
  //   console.log(transformedObjects)

  return data;
};

export const addCourse = async (newCourseContent) => {
  const response = await fetch(`${FETCH_DOMAIN}/trainingCourses.json`, {
    method: "POST",
    body: JSON.stringify(newCourseContent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return null;
};
