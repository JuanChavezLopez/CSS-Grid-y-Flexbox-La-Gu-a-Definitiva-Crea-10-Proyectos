document.addEventListener('DOMContentLoaded', () => {
    // alert("funciona");
    cargarPortafolio();
});

function cargarPortafolio(){
    // alert("Hola desde la funcion.");
    // todo: usaremos fetch API
    fetch('datos.json')
        .then((respuesta) => {
            // console.log(respuesta)
            return respuesta.json();
        })
        .then((datos) => {
            // console.log(datos);
            let html ='';
            datos.portafolio.forEach( portafolio =>{
                // console.log(portafolio);
                html  += `
                    <div class="elemento">
                        <img src="img/${portafolio.id}.jpg">
                        <div class="contenido">
                            <h3>${portafolio.nombre}</h3>
                            <p>${portafolio.desc}</p>
                        </div>
                    </div>
                `;
            });

            // inyectar codigo al html
            document.querySelector('#listado').innerHTML = html;

        })
}