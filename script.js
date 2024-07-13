const generateQuote = () => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            document.getElementById("quote").innerText = randomQuote.text;
            document.getElementById("author").innerText = randomQuote.author ? randomQuote.author : "Unknown";
        })
        .catch(error => console.error('Error fetching the quotes:', error));
};
