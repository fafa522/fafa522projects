const slides = document.querySelectorAll('.prices__block'),
  prev   = document.querySelector('prices__button-prev'),
  next   = document.querySelector('prices__button-next');

let index = 1;

const updateSlider = (n) => {
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index - 1].style.display = 'block';
};
updateSlider(index);

const changeSlide = (n) => {
  index += n;
  updateSlider(index);
};

prev.addEventListener('click', () => {
  changeSlide(-1);
});
next.addEventListener('click', () => {
  changeSlide(1);
});


//tabs
const tabWrap = document.querySelector('.cars__tabs'),
  tabs        = document.querySelectorAl('.car__tab'),
  carsBlocks  = document.querySelectorAll('.cars__block');

const hideBlocks = () => {
  tabs.forEach((tab) => {
    tab.classList.remove('active')
  });
  carsBlocks.forEach((block) =>{
  block.classList.remove('active')
  })
}

const showBlock = (i = 0) => {
  hideBlocks();
  tabs[i].classList.add('active');
  carsBlocks[i].classList.add('active');
};
showBlock();

tabWrap.addEventListener('click', () =>{
  const target = e.target;
  if (target && target.classList.contains('cars__tab')){
    tabs.forEach((tab, index ) => {
      if (tab === target) {
        showBlock(index);
      }
    });
  }
})


// render

const processBlocks = document.querySelector('.process__blocks' ) 

const data = [
  {id: 1, title: 'Оценка объема предстоящих работ', 
   desc: 'Стоимость переезда зависит от количества комнат, вещей и мебели.',
   img: './img/sections/Group 1.png',
  },
  {id: 2, title: 'Погрузка и транспортировка вещей', 
   desc: 'В нашем автопарке имеются машины, подходящие для мебели любых габаритов.',
   img: './img/sections/Group 3.png',
  },
  {id: 3, title: 'Упаковка вещей', 
   desc: 'Упаковываем вещи в коробки, подписываем. Габаритное и деликатное,  упаковываем отдельно.',
   img: './img/sections/Group 2.png',
  },
  {id: 4, title: 'Распаковка и расстановка мебели', 
   desc: 'Опытные грузчики быстро расставят мебель и уберут мусор от распаковки.',
   img: './img/sections/Group 4.png',
  }
];

const render = () => {
  data.map((item) => {
    const element = document.createElement('div');
    element.classList.add('process__block block-process');
    element.innerHTML = `
    <img src="${item.img}" alt="one" class="block-process__img">
    <div class="block-process__wrap">
    <div class="block-process__title">${item.title}</div>
    <div class="block-process__desc">${item.desc}</div>
    `;
  });
};
render();

