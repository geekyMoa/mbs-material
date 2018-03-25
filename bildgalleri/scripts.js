let productLink = document.getElementById('products');
let dropdown = document.getElementById('dropdown');

productLink.addEventListener('click', function(event) {
  event.preventDefault();
  let displayType = dropdown.style.display;

  if (displayType === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
});











(function() {

  let images = document.getElementsByClassName('image-gallery--image');
  let modalWrapper = document.getElementById('modal');
  let modalImage = document.getElementById('modal-image');
  let modalClose = document.createElement('span');
  let imageElement = document.createElement('img');

  modalClose.classList.add('close');
  modalImage.appendChild(modalClose);

  let onClick = (event) => {
    let target = event.target;
    if (target.nodeName === "IMG") {
      imageElement.src = target.src;
      modalImage.appendChild(imageElement);
      modalWrapper.classList.add('active');
    }
  };

  modalClose.addEventListener('click', function(event){
    modalWrapper.classList.remove('active');
    imageElement.remove();
  });

  Array.prototype.forEach.call(images, function(el){
    el.addEventListener('click', onClick);
  });

})();