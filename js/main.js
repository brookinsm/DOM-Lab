const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //1.0
  const MainEl = document.querySelector('main')
//1.1
MainEl.style.backgroundColor='var(--main-bg)'
//1.2
MainEl.innerHTML='<h1> SEI ROCKS!</h1>'
//1.3
MainEl.classList.add('flex-ctr')
