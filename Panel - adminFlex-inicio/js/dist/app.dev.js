"use strict";

// const menuIzquierdo = document.querySelector('.menu-izquierdo');
// menuIzquierdo.addEventListener('click', (e)  => {
//        const claseMenu = e.target.classList;
//        // Selecciona el contenedor
//        const contenedor = document.querySelector('.pagina'),
//              flechaIzq = document.querySelector('.fa-arrow-left'),
//              flechaDer = document.querySelector('.fa-arrow-right');
//        if(claseMenu.contains('fa-arrow-left') ) {
//             // cerrar el menú lateral
//             contenedor.classList.add('no-menu');
//             e.target.style.display = 'none';
//             flechaDer.style.display = 'block';
//        } else if( claseMenu.contains('fa-arrow-right')) {
//             contenedor.classList.remove('no-menu');
//             e.target.style.display = 'none';
//             flechaIzq.style.display = 'block';
//        }
// });
var menuIzquierdo = document.querySelector('.menu-izquierdo');
menuIzquierdo.addEventListener('click', function (e) {
  var claseMenu = e.target.classList; // crear variables que seleccionen las flechas y la pagina

  var contenedor = document.querySelector('.pagina'),
      flechaIzq = document.querySelector('.fa-arrow-left'),
      flechaDer = document.querySelector('.fa-arrow-right');

  if (claseMenu.contains('fa-arrow-left')) {
    // cerrar el menu lateral
    console.log('cerrar el menu');
    flechaIzq.style.display = 'none';
    flechaDer.style.display = 'block'; // contenedor almacena la variable de la pagina

    contenedor.classList.add('no-menu');
  } else if (claseMenu.contains('fa-arrow-right')) {
    // abrir el menu lateral derecho
    console.log('abre el menu');
    flechaIzq.style.display = 'block';
    flechaDer.style.display = 'none';
    contenedor.classList.remove('no-menu');
  }
});