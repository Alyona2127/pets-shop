const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];


const itemTemplate = document.querySelector('#item-template');
const container = document.querySelector('#shop-items');

function renderItems(newItems) {
  newItems.forEach((item) => {
    const element = itemTemplate.content.cloneNode(true);
    
    const elementTitle = element.querySelector('h1');
    elementTitle.textContent = item.title;
    
    const elementDescription = element.querySelector('p');
    elementDescription.textContent = item.description;
    
    const elementImg = element.querySelector('img');
    elementImg.src = item.img;
    
    const elementPrice = element.querySelector('.price');
    elementPrice.textContent = item.price;
    
    const elementTags = element.querySelector('.tags');

    item.tags.forEach(tag => {
      const span = document.createElement('span');
      span.classList.add('tag');
      span.textContent = tag;
      elementTags.append(span);
    });
    
    container.append(element);
  });
}

renderItems(items);

const button = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const text = document.querySelector('#nothing-found');

button.addEventListener('click', function() {
  text.innerHTML = '';
  const inputText = searchInput.value;
  
  const filteredItems = items.filter(item => 
    item.title.trim().toLowerCase().includes(inputText.toLowerCase())
    );
  
  if (filteredItems.length > 0) {
    container.innerHTML = '';
    renderItems(filteredItems);  
  } else {
    container.innerHTML = '';
    text.textContent = 'Ничего не найдено';
  }
});