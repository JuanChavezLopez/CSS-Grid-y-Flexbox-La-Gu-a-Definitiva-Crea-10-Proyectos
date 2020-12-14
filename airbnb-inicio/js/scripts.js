document.addEventListener('DOMContentLoaded', () => {

    // todo: -------IMAGEN EN MOVIMIENTO Y SE REINICIA A LOS 40 seg.--------------

    // obtener la imagen
    const imagenHero = document.querySelector('.hero');
     
    // inicializar las variables
    let i =0;
    let tiempo = 0;

    //todo----arreglo con imagenes----
    const imagenes =['arriba2.jpg', 'arriba.jpg'];

    setInterval (() => {
        imagenHero.style.backgroundPositionX = '-'+ tiempo + 'px'; /* movemos en direccion al eje X */

        if(tiempo > 40){
            tiempo = 0;
            
            imagenHero.style.backgroundImage = "url(img/"+imagenes[i]+")";
            if(i == imagenes.length -1){
                i = 0;
            }else{
                i++;
            }
            
            console.log(imagenes[i]);
        }

        tiempo++;

        // console.log(tiempo);
    },100);
    // boton flotante en el footer


    // todo: -------FOOTER FIXED--------------
    const btnFlotante = document.querySelector('.btn-flotante');
    // console.log(btnFlotante);

    btnFlotante.addEventListener('click', (e)=>{
        e.preventDefault();

        // prevenimos default, pero ejecutamos el siguiente codigo.

        const footer = document.querySelector('#footer');
        // console.log(footer.classList);
        if(footer.classList.contains('activo')){
            // si no lo contiene, ejecuta eset codigo
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText ='Idioma y Moneda'; /* cambiamos el texto. */

        }else{
            // si lo contiene, ejecuta este otro codigo
            footer.classList.add('activo')
            btnFlotante.classList.add('activo');
            btnFlotante.innerText ='X  Cerrar'; /* cambiamos el texto. */
        }
    });
});