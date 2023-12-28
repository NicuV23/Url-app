const shortUrl = document.querySelector(".shortUrl");
const shortBtn = document.querySelector(".shortenBtn");
const shortenInput = document.querySelector(".shortenInput");
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.rebrandly.com/v1/links";

shortBtn.addEventListener("click", shortenUrl);

async function shortenUrl() {
  const originalUrl = shortenInput.value.trim();

  if (originalUrl !== "") {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: JSON.stringify({
          destination: originalUrl,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const shortenedLink = data.shortUrl;
        shortUrl.textContent = shortenedLink;
      } else {
        alert("Error shortening the URL. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  } else {
    alert("Please enter a valid URL.");
  }
}
