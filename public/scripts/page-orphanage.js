const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-26.8807883,-49.0885652], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


//add marker
L.marker([-26.8807883,-49.0885652], {icon}).addTo(map)

// Image galery

function selectImage(event){
    const button = event.currentTarget

    // remover todas as Classes .active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active')
    });
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container de imagem 
    imageContainer.src = image.src

    button.classList.add('active')
}

