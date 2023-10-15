"use strict"

/* ========== BackGround ========== */

/* 水玉の動く背景 */
bubbly({
  animate:true,
  colorStart: '#fff',
  colorStop: '#ddd',
  blur:1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${0 + Math.random() * 50}, 100%, 60%, .5)`
});

/* ========== hamburger menu ========== */

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  if (close !== null){
    close.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
      });
  }
}

/* ========== navigation var ========== */

// ナビゲーションバーが横から出てくる
{
  const nav_home = document.getElementById('nav_home');
  const nav_about = document.getElementById('nav_about');
  const nav_skill = document.getElementById('nav_skill');
  const nav_works = document.getElementById('nav_works');
  const nav_contact = document.getElementById('nav_contact');

  setTimeout(function(){nav_home.classList.remove('hidden');},0)
  setTimeout(function(){nav_about.classList.remove('hidden');},300)
  setTimeout(function(){nav_skill.classList.remove('hidden');},600)
  setTimeout(function(){nav_works.classList.remove('hidden');},900)
  setTimeout(function(){nav_contact.classList.remove('hidden');},1200)
}

// ナビゲーションバーをクリックして自動スクロール

document.querySelectorAll('.nav_list a').forEach(item => {
  item.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth',  
       });
  });
});

// スクロール中nav_Varの色変更

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
});

/* ===== Worksをクリックで詳細画面 ===== */

{
  const WorksImg = document.getElementsByClassName('WorksImg');
  const work = document.getElementsByClassName('work');
  const worksDetail = document.querySelector('.worksDetail');
  const closeWorks = document.getElementById('closeWorks');
  const header = document.querySelector('.header');

  



  for (let i = 0; i < WorksImg.length; i++) {

    WorksImg[i].addEventListener('click', () => {
      worksDetail.classList.toggle('show');
      work[i].classList.remove('hideWorks');
      header.classList.add('hideHeader');

    });  

    closeWorks.addEventListener('click', () => {
      worksDetail.classList.remove('show');
      work[i].classList.add('hideWorks');
      header.classList.remove('hideHeader');
    });
  };
}

