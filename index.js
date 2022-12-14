const box3 = document.querySelector('.box3');
let translitBox = box3.querySelectorAll('.translit-box');
const firstLeft = translitBox[0];

function foldLine() {
  if (inputTranslit.value.length > 0) {
    const cloneFirstLeft = firstLeft.cloneNode(true);
    const translitBlock = cloneFirstLeft.querySelector('.right');
    const deleteButtom = document.createElement('img');
    deleteButtom.src = '/Img/symbol.svg';
    deleteButtom.alt = 'delete';

    deleteButtom.addEventListener('click', (event) => {
      event.target.closest('.translit-box').remove();
      replacement();
    });

    translitBlock.appendChild(deleteButtom);
    cloneFirstLeft.querySelector('.left p').innerText = rupture(inputTranslit.value, cloneFirstLeft, 'left');
    cloneFirstLeft.querySelector('.right p').innerText = rupture(transliteration(inputTranslit.value), cloneFirstLeft, 'right');
    box3.appendChild(cloneFirstLeft);
    replacement();
  }
}

let inputTranslit = document.getElementById('input-translit');
inputTranslit.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    foldLine();
  }
});

const addTranslit = document.getElementById('add-translit');
addTranslit.addEventListener('click', () => {
  foldLine();
});

const allDeleteButton = document.getElementById('delete');
allDeleteButton.addEventListener('click', () => {
  allDelete();
});

function allDelete() {
  if (translitBox.length > 1) {
    for (let i = translitBox.length - 1; i > 0; i--) {
      translitBox[i].remove();
    }
    replacement();
  }
}

function replacement() {
  inputTranslit.value = '';
  translitBox = box3.querySelectorAll('.translit-box');
  const leftnumber = document.querySelectorAll('.left-number');
  for (let i = 1; i < leftnumber.length; i++) {
    leftnumber[i].innerText = `${i + 1}`;
  }
}

function rupture(str, element, type) {
  if (str.length > 7) {
    let fullText;
    if (type === 'left') {
      fullText = element.querySelector('.left .left-text');
    } else if (type === 'right') {
      fullText = element.querySelector('.right .right-text');
    }
    const fullText1 = document.createElement('p');
    fullText1.className = 'prompt';
    fullText1.innerText = str;
    if (str.length > 150) {
      fullText1.style.overflowY = 'scroll';
    }
    fullText.appendChild(fullText1);
    str = `${str.slice(0, 7)}...`;
  }
  return str;
}

function transliteration(str) {
  const translit = {

    ??: 'a',
    ??: 'b',
    ??: 'v',
    ??: 'g',
    ??: 'd',

    ??: 'e',
    ??: 'yo',
    ??: 'zh',
    ??: 'z',
    ??: 'i',

    ??: 'j',
    ??: 'k',
    ??: 'l',
    ??: 'm',
    ??: 'n',

    ??: 'o',
    ??: 'p',
    ??: 'r',
    ??: 's',
    ??: 't',

    ??: 'u',
    ??: 'f',
    ??: 'h',
    ??: 'c',
    ??: 'ch',

    ??: 'sh',
    ??: 'shch',
    ??: '',
    ??: 'y',
    ??: '\'',

    ??: 'eh',
    ??: 'yu',
    ??: 'ya',

    ??: 'A',
    ??: 'B',
    ??: 'V',
    ??: 'G',
    ??: 'D',

    ??: 'E',
    ??: 'Yo',
    ??: 'Zh',
    ??: 'Z',
    ??: 'I',

    ??: 'J',
    ??: 'K',
    ??: 'L',
    ??: 'M',
    ??: 'N',

    ??: 'O',
    ??: 'P',
    ??: 'R',
    ??: 'S',
    ??: 'T',

    ??: 'U',
    ??: 'F',
    ??: 'H',
    ??: 'C',
    ??: 'Ch',

    ??: 'Sh',
    ??: 'Schh',
    ??: '',
    ??: 'Y',
    ??: '\'',

    ??: 'Eh',
    ??: 'Yu',
    ??: 'Ya',

  };

  let res = str.split('');
  res = res.map((x) => (translit[x] !== undefined ? x = translit[x] : x));
  return res.join('');
}
