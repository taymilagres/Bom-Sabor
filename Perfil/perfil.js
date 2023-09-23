//Alteração da foto de perfil do usuário

let perfil = document.getElementById('imgPerfil');
let file = document.getElementById('filePerfil');

perfil.addEventListener('click', () => {
    file.click();
})

file.addEventListener('change', (event) => {
    
    let reader = new FileReader();

    reader.onload = () =>{
        perfil.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

//Alteração da foto do banner do usuário

let banner = document.getElementById('imgBanner');
let fileBanner = document.getElementById('fileImg');

banner.addEventListener('click', () => {
    fileBanner.click();
})

fileBanner.addEventListener('change', (event) => {
    
    let reader = new FileReader();

    reader.onload = () =>{
        banner.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})
