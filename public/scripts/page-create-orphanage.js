const map = L.map('mapid').setView([-26.8807883,-49.0885652], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})

let marker

//create the marker
map.on('click', (event) =>{
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    
    //remove existent markers
    marker && map.removeLayer(marker)

    //add a new marker
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

// add photo field

const addPhotoField = () =>{
    //pegar container #images
    const fieldImages = document.querySelector('#images')
    //pegar container .new-upload
    const fieldsUpload = document.querySelectorAll('.new-upload')
    //realizar clonagem do ultimo item
    const newFieldsUpload = fieldsUpload[fieldsUpload.length - 1].cloneNode(true)
    //verificar se há conteudo, return se nao houver 
    const input = newFieldsUpload.children[0]
    if(input.value == ''){
        return
    }
    //limpar o campo
    input.value = ''
    //gerar o html
    fieldImages.appendChild(newFieldsUpload)
}

const deletField = (event) =>{
    const span = event.currentTarget
    const fieldsUpload = document.querySelectorAll('.new-upload')

    if(fieldsUpload.length < 2){
        span.parentNode.children[0].value = ''
        return
    }else{
        span.parentNode.remove()
    }

}


//selecione sim ou não
const toggleSelect = (event) =>{

    //retirar o padrão active
    document.querySelectorAll('.button-selector button')
    .forEach(button => {button.classList.remove('active')} )

    //colocar a class active no botação clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input com o valor
    const input = document.querySelectorAll('[open_on_weekends]')

    input.value = button.dataset.value
}

//desafio verificação mapa
function validate(event) {

    //algo semelhante a linha 39 e 40 desse arquivo

    //validar se lat e lng estão preenchifos
    const needsLatAndLng = false//true or false
    if(needsLatAndLng){
        event.preventDefault()
        alert('selecione um ponto no mapa')
    }
}