async function fetchDataFromAPI() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");

    const data = await response.json();
    console.log("Data from API:", data[2].text);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataFromAPI();

async function fetchDataFromAPI2() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    if (!response.ok) {
      throw new Error(`Failed to fetch data ${response.status}`);
    }
    const data = await response.json();
    console.log("Data from API 2:", data[1].text);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchDataFromAPI2();
