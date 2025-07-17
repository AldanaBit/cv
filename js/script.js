const botones = document.querySelectorAll('.acordeon-titulo');

botones.forEach(boton => {
    boton.addEventListener('click', () =>{
        const contenido = boton.nextElementSibling;

        document.querySelectorAll('.acordeon-contenido').forEach(cont =>{
            if (cont !== contenido) {
                cont.style.maxHeight = null;
                cont.style.padding = '0 15px';
            }
        });

        if (contenido.style.maxHeight) {
            contenido.style.maxHeight = null;
            contenido.style.padding = '0 15px'
        } else{
            contenido.style.maxHeight = contenido.scrollHeight + 'px';
            contenido.style.padding = '15px';
        }
    });
});