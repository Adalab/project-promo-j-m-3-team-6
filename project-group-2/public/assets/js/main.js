'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  setPhoto(fr.result);
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

'use strict';

//FORMULARIO
//Check Paleta de colores
const paletteStyle = document.querySelector('.preview__card');
const palettes = document.querySelectorAll('.js-check');
palettes[0].checked = true;

function changePalette(ev) {
  paletteStyle.classList.remove('palette1', 'palette2', 'palette3');
  if (ev.currenTarget === palettes[0]) {
    paletteStyle.classList.add('palette1');
  } else if (ev.currentTarget === palettes[1]) {
    paletteStyle.classList.add('palette2');
  } else if (ev.currentTarget === palettes[2]) {
    paletteStyle.classList.add('palette3');
  }
  addPaletteObject(ev);
}
function addPaletteObject(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  localStorage.setItem('userInfo', JSON.stringify(formData));
}

for (const palette of palettes) {
  palette.addEventListener('change', changePalette);
  palette.addEventListener('click', addPaletteObject);
}

'use strict';

/*--------------------Datos Formulario--------------- */

//Objeto para crear los datos del formulario
let formData = {
  photo: '',
};

//Objeto que tiene todas las clases de la card para poder pintarlas
const cardFields = {
  palette: document.querySelector('.js-check:checked').value,
  name: document.querySelector('.js-text-name'),
  job: document.querySelector('.js-text-job'),
  email: document.querySelector('.js-mail'),
  phone: document.querySelector('.js-number'),
  linkedin: document.querySelector('.js-linkedin'),
  github: document.querySelector('.js-github'),
};

console.log(cardFields);
//Variables con input del form
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const formButton = document.querySelector('.js-share'); //Variable boton del form
// const imgButton = document.querySelector('.js__profile-trigger'); //Variable boton del form
const textShare = document.querySelector('.js-textShare'); //Variable del texto oculto de compartir

//Funcion que guarda los datos en el objeto y lo pinta en la tarjeta el texto
function setData(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;
  formData[name] = inputValue;
  updateCard();
}

function updateCardText(name, placeholder) {
  cardFields[name].innerHTML = formData[name] || placeholder;
}

//Funcion que guarda los datos en el objeto
function setLinks(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;
  formData[name] = inputValue;
  updateCard();
}

//Funcion que imprime los datos en la tarjeta
function updateCardLinks(name, prefix) {
  cardFields[name].href = prefix + formData[name];
}

//Funcion que actualiza los datos de la tarjeta
function updateCard() {
  updateCardText('name', 'Nombre Apellido');
  updateCardText('job', 'Front-end developer');
  updateCardLinks('email', 'mailto:');
  updateCardLinks('phone', 'tel:');
  updateCardLinks('linkedin', 'https://linkedin.com/in/');
  updateCardLinks('github', 'https://github.com/');
  if (formData.photo !== '') {
    updateCardPhoto();
  } else {
    profileImage.style.backgroundImage = `url(./assets/images/Logo-Gryffincode.png)`;
  }
}

//Funcion que guarda los datos de la imagen en el objeto
function setPhoto(photo) {
  formData.photo = photo;
  localStorage.setItem('userInfo', JSON.stringify(formData));
  updateCard();
}

//funcion que imprime la imagen en la tarjeta y preview
function updateCardPhoto() {
  profileImage.style.backgroundImage = `url(${formData.photo})`;
  profilePreview.style.backgroundImage = `url(${formData.photo})`;
}

//Funcion que valida los datos
function validation(ev) {
  ev.preventDefault();

  if (
    inputName.value.length > 1 &&
    inputJob.value.length > 1 &&
    inputEmail.value.length > 1 &&
    inputPhone.value.length > 1 &&
    inputLinkedin.value.length > 1 &&
    inputGithub.value.length > 1
  ) {
    textShare.classList.remove('hidden');
    formButton.classList.add('disabled');
    formButton.classList.remove('share__content__button');
    // imgButton.classList.add('img-disabled');
    // imgButton.classList.remove('action__upload-btn');
  } else {
    alert('No has introducido ningún dato');
  }

  sendRequest(formData);
}

//------------------PETICION AL SERVIDOR - FETCH---------------------
const linkShare = document.querySelector('.js-linkShare');
const twitterURL = document.querySelector('.js-twitter');

function sendRequest(formData) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    linkShare.innerHTML =
      '<a target="_blank" href=' +
      result.cardURL +
      '>' +
      result.cardURL +
      '</a>';
    const tweet = 'Esta es nuestra Gryffincode Awesome Profile Cards';
    twitterURL.setAttribute(
      'href',
      `http://twitter.com/share?text=${tweet}&hashtags=adalaber,promoJemison,profileCards&user_mentions=Adalab_Digital&url=${result.cardURL}`
    );
  } else {
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
}

//---------------------LOCAL STORAGE--------------------------------------

//Guardamos los datos en el localStorage
document.addEventListener('keyup', function () {
  localStorage.setItem('userInfo', JSON.stringify(formData));
});

//recuperar datos al refrescar
const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
function uploadInfo() {
  if (savedInfo !== null) {
    formData.name = savedInfo.name;
    inputName.value = savedInfo.name || '';
    formData.job = savedInfo.job;
    inputJob.value = savedInfo.job || '';
    formData.email = savedInfo.email;
    inputEmail.value = savedInfo.email || '';
    formData.phone = savedInfo.phone;
    inputPhone.value = savedInfo.phone || '';
    formData.linkedin = savedInfo.linkedin;
    inputLinkedin.value = savedInfo.linkedin || '';
    formData.github = savedInfo.github;
    inputGithub.value = savedInfo.github || '';
    formData.photo = savedInfo.photo;
    profileImage.style.backgroundImage =
      `url(${savedInfo.photo})` || `url(./assets/images/Logo-Gryffincode.png)`;
    profilePreview.style.backgroundImage = `url(${savedInfo.photo})`;

    if (savedInfo.palette) {
      document.querySelector(
        '.js-check#color' + savedInfo.palette
      ).checked = true;
      paletteStyle.classList.add(`palette${savedInfo.palette}`);
    }
    updateCard();
  }
}
uploadInfo();

//------------------------------------------------

//Listeners
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);
inputEmail.addEventListener('keyup', setLinks);
inputPhone.addEventListener('keyup', setLinks);
inputLinkedin.addEventListener('keyup', setLinks);
inputGithub.addEventListener('keyup', setLinks);
formButton.addEventListener('click', validation);


'use strict';

// COLLAPSIBLE SECTIONS
const arrowTransform1 = document.querySelector('.js-arrowTransform1');
const arrowTransform2 = document.querySelector('.js-arrowTransform2');
const arrowTransform3 = document.querySelector('.js-arrowTransform3');
const arrow1 = document.querySelector('.js-arrow1');
const arrow2 = document.querySelector('.js-arrow2');
const arrow3 = document.querySelector('.js-arrow3');
const collapsible = document.querySelector('.js-collapsed');
const collapsibleHidden1 = document.querySelector('.js-hidden1');
const collapsibleHidden2 = document.querySelector('.js-hidden2');
const collapsibleHidden3 = document.querySelector('.js-hidden3');


function changeCollapsible1() {
  collapsibleHidden1.classList.toggle('hidden');
  arrowTransform1.classList.toggle('transform');
}
function changeCollapsible2() {
  collapsibleHidden2.classList.toggle('hidden');
  arrowTransform2.classList.toggle('transform');
}
function changeCollapsible3() {
  collapsibleHidden3.classList.toggle('hidden');
  arrowTransform3.classList.toggle('transform');
}

arrow1.addEventListener('click', changeCollapsible1);
arrow2.addEventListener('click', changeCollapsible2);
arrow3.addEventListener('click', changeCollapsible3);

/* eslint-disable no-undef */
'use strict';

//-------------------RESET------------------------
// get resetElement dom element
const resetElement = document.querySelector('.js-reset');

// clear all inputs
function reset(ev) {
  ev.preventDefault();
  localStorage.removeItem('userInfo');
  formData = {
    photo: '',
  };
  inputName.value = '';
  cardFields.name.innerHTML = 'Nombre Apellido';
  inputJob.value = '';
  cardFields.job.innerHTML = 'Front-end developer';
  inputEmail.value = '';
  cardFields.email.href = 'mailto:';
  inputPhone.value = '';
  cardFields.phone.href = 'tel:';
  inputLinkedin.value = '';
  cardFields.linkedin.href = 'https://linkedin.com/in/';
  inputGithub.value = '';
  cardFields.github.href = 'https://github.com/';
  profileImage.style.backgroundImage = `url(./assets/images/Logo-Gryffincode.png)`;
  profilePreview.style.backgroundImage = ``;

  palettes[0].checked = true;
  paletteStyle.classList.add('palette1');
  paletteStyle.classList.remove('palette2', 'palette3');
}

// listen click in reset button
resetElement.addEventListener('click', reset);

//# sourceMappingURL=main.js.map
