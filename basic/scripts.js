'use strict';

(function() {

  const images = document.getElementsByClassName('image-gallery--image');
  const modalWrapper = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalClose = document.createElement('span');
  const imageElement = document.createElement('img');
  console.log('modal: ', modal);
  modalClose.classList.add('close');
  modalImage.appendChild(modalClose);
  const onClick = (event) => {
    const target = event.target;
    if (target.nodeName !== "IMG") return;
    imageElement.src = target.src;
    modalImage.appendChild(imageElement);
    modalWrapper.classList.add('active');
    console.dir(target.src);
    console.log('image clicked');
  };

  modalClose.addEventListener('click', function(event){
    modalWrapper.classList.remove('active');
    imageElement.remove();
  });

  for (let image of images) {

  }
  Array.prototype.forEach.call(images, function(el){
    el.addEventListener('click', onClick);
  });


})();