async function fetchData(id) {
    try {
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parses the JSON returned by the server
      return data; // Here you can handle the data
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }
fetchData().then(data => {console.log(data)})

async function infoDisplay(id) {
  //console.log(id)
  const response = await fetchData(id)
  // console.log(response.data.artist_title)
  alert(response.data.artist_title)
}