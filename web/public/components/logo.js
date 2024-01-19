'use strict';

export const ImageContainer = (className, image) => {
  const imgContainer = document.createElement('img');
  imgContainer.className = className;
  imgContainer.src = image;
  // parentEl.appendChild(imgContainer);
  return imgContainer;
};
