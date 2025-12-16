const quoteText = document.querySelector(".APIquotes");
const authorText = document.querySelector(".APIauthor");
const btn = document.querySelector(".addbutton");

btn.addEventListener("click", async () => {
  try {
    btn.textContent = "Loading...";
    btn.disabled = true;
    quoteText.style.opacity = "0.5";

    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
    const data = await response.json();

    quoteText.textContent = `"${data.quote}"`; 
    authorText.textContent = `- ${data.author}`;
    
  } catch (err) {
    quoteText.textContent = "⚠️ The wisdom is currently unavailable.";
    console.error(err);
  } finally {
    btn.textContent = "New Quote";
    btn.disabled = false;
    quoteText.style.opacity = "1";
  }
});
