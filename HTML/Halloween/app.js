let searchForm = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


window.onscroll =() =>
{
   searchForm.classList.remove('active')
   navbar.classList.remove('active')  
   if(window.scrollY>0)
   {
       document.querySelector('.header').classList.add('active');
   }
   else
   {
    document.querySelector('.header').classList.remove('active');
   }
}
//scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

};

window.onload =() =>
{
   if(window.scrollY>0)
   {
       document.querySelector('.header').classList.add('active');
   }
   else
   {
    document.querySelector('.header').classList.remove('active');
   }
}
   