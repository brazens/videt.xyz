/*
 - videt v0.6.0
 - Copyright (c) 2021 Leeminjun
 - MIT License(https://github.com/brazens/videt/blob/main/LICENSE)
*/

[...document.getElementsByClassName('class-add')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault;
      
      document
        .getElementsByClassName(el.dataset.target)[0]
        .classList.add(el.dataset.value)
      ;
    });
  });
  [...document.getElementsByClassName('class-remove')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault;
      
      document
        .getElementsByClassName(el.dataset.target)[0]
        .classList.remove(el.dataset.value)
      ;
    });
  });
  [...document.getElementsByClassName('class-replace')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault;
      
      document
        .getElementsByClassName(el.dataset.target)[0]
        .classList.replace(el.dataset.target, el.dataset.value)
      ;
    });
  });