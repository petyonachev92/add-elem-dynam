import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  addArticles();
});

function addArticles() {
  for(let i = 0; i < 5; i++){
    let message = document.createElement('article');
    message.className = 'message';
    message.textContent = 'sample text';
    let body = document.getElementsByTagName('body')[0];

    body.appendChild(message);
    console.log(i);
  };

  
}