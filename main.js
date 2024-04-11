
const reviews = [
    {
      id: 1,
      name: 'Ram Lal',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum maiores pariatur illo nam quod quae eum similique sed doloremque.",
    },

    {
      id: 2,
      name: 'Shyam Lal',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum maiores pariatur illo nam quod quae eum similique sed doloremque.',
    },
    {
      id: 3,
      name: 'Gita',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum maiores pariatur illo nam quod quae eum similique sed doloremque.',
    },
    {
      id: 4,
      name: 'Sita',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum maiores pariatur illo nam quod quae eum similique sed doloremque.',
    },

  ];
 
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  

  let currentItem = 0;
  
  
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
 
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
 
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
 
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });