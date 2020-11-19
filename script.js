//lightbox para las imagenes
//El lightbox para las imagenes fue de https://www.youtube.com/watch?v=uKVVSwXdLr0&ab_channel=WebDevSimplified 
// https://www.youtube.com/watch?v=r233kDWShkA&ab_channel=Webflow


//se crea una elemento div
const lightbox = document.createElement('div')
lightbox.id = 'lightbox' //elemento llamado lightbox
document.body.appendChild(lightbox) //añade el lightbox

//seleccionar imagenes
const images = document.querySelectorAll('img')
images.forEach(image => { //por cada imagen corre esta funcion
  image.addEventListener('click', e => { //se  muestre la lightbox cuando se presione
    lightbox.classList.add('active') //se activa
    const img = document.createElement('img') //se une la imagen al lightbox
    img.src = image.src //el source sea la image que se eligio
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild) //para que remueva la image que se hizo click anteriormente
    }
    lightbox.appendChild(img) //se añade la imagen
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return //si se clickea en algun lugar donde no este la imagen, se sale de la lightbox
  lightbox.classList.remove('active')})

