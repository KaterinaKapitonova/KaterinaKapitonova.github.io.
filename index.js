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

    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',

    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',

    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',

    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',

    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',

    ш: 'sh',
    щ: 'shch',
    ъ: '',
    ы: 'y',
    ь: '\'',

    э: 'eh',
    ю: 'yu',
    я: 'ya',

    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',

    Е: 'E',
    Ё: 'Yo',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',

    Й: 'J',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',

    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',

    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'C',
    Ч: 'Ch',

    Ш: 'Sh',
    Щ: 'Schh',
    Ъ: '',
    Ы: 'Y',
    Ь: '\'',

    Э: 'Eh',
    Ю: 'Yu',
    Я: 'Ya',

  };

  let res = str.split('');
  res = res.map((x) => (translit[x] !== undefined ? x = translit[x] : x));
  return res.join('');
}
