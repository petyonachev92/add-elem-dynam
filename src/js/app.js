import "../scss/app.scss";

document.getElementsByTagName('body')[0].addEventListener('click', addArticles);

function addArticles() {
  for(let i = 0; i < 5; i++){
    let message = document.createElement('article');
    message.className = 'message';
    message.textContent = 'sample text';
    let body = document.getElementsByTagName('body')[0];

    body.appendChild(message);
    
  };

  
}