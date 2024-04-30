//3.0 - moved to top
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //1.0
  const MainEl = document.querySelector('main');
//1.1
MainEl.style.backgroundColor='var(--main-bg)';
//1.2
MainEl.innerHTML='<h1> SEI ROCKS!</h1>';
//1.3
MainEl.classList.add('flex-ctr');
//2.0
const topMenuEL=document.getElementById('top-menu');
//2.1
topMenuEL.style.height-'100%'
//2.2
topMenuEL.classList.add('flex around');
//3.1 --had issues with this part and need to figure out what I missed
menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.innerText = link.text;
    topMenuEl.appendChild(linkEl);
  });