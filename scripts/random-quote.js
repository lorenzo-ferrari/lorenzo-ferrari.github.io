fetch('quotes.json') // Ensure the file path matches the actual location
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(citations => {
    const randomIndex = Math.floor(Math.random() * citations.length);
    const selected = citations[randomIndex];
    document.getElementById("citation").textContent = `"${selected.citation}"`;
    document.getElementById("author").textContent = `~ ${selected.author}`;
  })
  .catch(error => console.error('Error loading citations:', error));
