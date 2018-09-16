import './youtube.styl';
const config = Object.assign({},cogear.config.youtube, {
  wrapper: 'p'
});
document.addEventListener('DOMContentLoaded',()=>{
  let elems = document.querySelectorAll('.youtube');
  elems.forEach(el=>{
    let link = el.querySelector('a');
    let wrapper = link.closest('.youtube-link');
    link.addEventListener('click',(e)=>{
      e.preventDefault();
      el.classList.add('active');
      let src = el.dataset.src;
      let options = el.dataset.options || '?';
      options += '&autoplay=1&start=0';
      wrapper.innerHTML = '<div class="loader"><div></div><div></div><div></div><div></div></div>';
      let player = document.createElement('div');
      player.innerHTML = `<iframe src="https://www.youtube.com/embed/${src}${options}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      el.appendChild(player);
    });
  });
});