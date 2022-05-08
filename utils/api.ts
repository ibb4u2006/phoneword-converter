export const postNumericInput = async (endpoint: string, value: string) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: value }),
    });
    if (response.ok) {
      const jsonresponse = await response.json();
      return jsonresponse;
    } else {
      throw new Error("Change Request Failed!");
    }
  } catch (error) {
    console.log(error);
  }
};
