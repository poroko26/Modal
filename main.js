let clickBtn = document.getElementById('click-me-btn');
let closeBtn = document.querySelector('.close-btn');
let modalContainer = document.querySelector('.modal-container');

clickBtn.addEventListener('click', function(){
  modalContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
  modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e){

  if(e.target === modalContainer)
  {
    modalContainer.style.display = 'none';
  }
})