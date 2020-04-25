   let menuMovil = document.querySelector('.menu-movil');
   let menuIcono = document.querySelector('.menu-movil i');
   let navegacion = document.querySelector('.navegacion');

      menuMovil.addEventListener('click', e => {
         navegacion.classList.toggle('show');

         if (navegacion.classList('show')) {
            menuIcono.setAttribute('class', 'fa fa-times');
         } else {
            menuIcono.setAttribute('class', 'fa fa-bars');
         }
      
      });