document.querySelector(".addbutton").addEventListener("click", async () => {
  try {
    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
    const data = await response.json();

    document.querySelector(".APIquotes").textContent = data.quote;
    document.querySelector(".APIauthor").textContent = data.author;



  } catch (err) {
    document.querySelector(".API.quotes").textContent = "⚠️ Failed to fetch quote";
    console.error(err);
  }
});