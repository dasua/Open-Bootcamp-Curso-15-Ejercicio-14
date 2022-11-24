const boton = document.querySelector('#boton')

boton.addEventListener('click', () => {
    alert('click en el botón')
})

$(()=> {
    $('#boton').on('click',()=>{
        alert('Hola, estoy utilizando jQuery')
    })
})
