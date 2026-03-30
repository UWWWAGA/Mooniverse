// Данные
let items = [
  {
    id: 1,
    title: "Бегущий по лезвию (1982)",
    type: "movie",
    rating: 3,
    duration: "1ч 57м",
    image: "https://static.okko.tv/images/v4/10df492e-d5cd-4c20-8029-7e656dcbf056?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/b09bbe2b-fbbf-4b28-af3c-1a0f8ca22c21",
    service: "Boosty"
  },
  {
    id: 2,
    title: "Гарри Поттер и Философский камень",
    type: "movie",
    rating: 5,
    duration: "2ч 32м",
    image: "https://avatars.mds.yandex.net/i?id=30acd34fd16c417f5eb3e0fdd015f3e1_l-4571989-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/508702f0-4f38-4a3c-9b47-8d04fa83bcbe",
    service: "Boosty"
  },
  {
    id: 3,
    title: "Гарри Поттер и Тайная комната",
    type: "movie",
    rating: 5,
    duration: "2ч 41м",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/35/28/eb/3528ebcd-e054-9628-3619-0ccfe1e58b93/pr_source.lsr/1200x675.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/508702f0-4f38-4a3c-9b47-8d04fa83bcbe",
    service: "Boosty"
  },
  {
    id: 4,
    title: "Гарри Поттер и узник Азкабана",
    type: "movie",
    rating: 5,
    duration: "2ч 22м",
    image: "https://static.okko.tv/images/v4/0a7c40da-0825-484b-84d0-bbbad2627d89?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/508702f0-4f38-4a3c-9b47-8d04fa83bcbe",
    service: "Boosty"
  },
  {
    id: 5,
    title: "Гарри Поттер и Кубок огня",
    type: "movie",
    rating: 5,
    duration: "2ч 37м",
    image: "https://avatars.mds.yandex.net/i?id=a4d3b1e96af77232095a2aae50358b67_l-10551030-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/b1afeca2-a29b-4132-aa1b-3526148fc0a1",
    service: "Boosty"
  },
  {
    id: 6,
    title: "Гарри Поттер и Орден Феникса",
    type: "movie",
    rating: 5,
    duration: "2ч 18м",
    image: "https://avatars.mds.yandex.net/i?id=2df800b9810cfdeaa0ba8ef1019da85f_l-11431503-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/b1afeca2-a29b-4132-aa1b-3526148fc0a1",
    service: "Boosty"
  },
  {
    id: 7,
    title: "Гарри Поттер и Принц-Полукровка",
    type: "movie",
    rating: 5,
    duration: "2ч 33м",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/cba1d85a-5ef4-4ba3-b537-1d24554fe85c/862244ed-3e29-43eb-96f5-d323f9a73651?host=wbd-images.prod-vod.h264.io&amp;partner=beamcom&amp;w=500",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/3afede5f-df40-4c61-b13f-f7dd41c3cf45",
    service: "Boosty"
  },
  {
    id: 8,
    title: "Гарри Поттер и Дары Смерти. Часть 1",
    type: "movie",
    rating: 5,
    duration: "2ч 26м",
    image: "https://static.okko.tv/images/v4/a0eccb05-2209-4782-bded-b62ef70e9a23?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/791b4d65-599d-435d-9c1f-82dc8145e8f0",
    service: "Boosty"
  },
  {
    id: 9,
    title: "Гарри Поттер и Дары Смерти. Часть 2",
    type: "movie",
    rating: 5,
    duration: "2ч 10м",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/14/ec/77/14ec77cb-0da2-ebfb-a71b-83b5ba70276f/pr_source.lsr/1200x675.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/791b4d65-599d-435d-9c1f-82dc8145e8f0",
    service: "Boosty"
  },
  {
    id: 10,
    title: "Образцовый самец",
    type: "movie",
    rating: 1,
    duration: "1ч 30м",
    image: "https://avatars.mds.yandex.net/i?id=c0a146890eac0e55c387ca1a96c7d84f_l-9149535-images-thumbs&n=13",
    review: "После просмотра советую поход к психиатру",
    watchUrl: "https://boosty.to/mooniverse/posts/b6ab5161-b79f-4461-a4e1-2d5b98ae5a08",
    service: "Boosty"
  },
  {
    id: 11,
    title: "Хоббит: Нежданное путешествие",
    type: "movie",
    rating: 5,
    duration: "2ч 49м",
    image: "https://static.okko.tv/images/v4/15a51442-c7c6-407b-bb4e-acd3896ce7f5?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/3092f965-9fba-46b6-8ccf-9b561b1af32c",
    service: "Boosty"
  },
  {
    id: 12,
    title: "Хоббит: Пустошь Смауга",
    type: "movie",
    rating: 5,
    duration: "2ч 41м",
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/b8675be2-0921-489f-8b53-75d5e7b221a8/1920x",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/84a23c05-cbc9-4443-9fe3-4cd9b5fe812e",
    service: "Boosty"
  },
  {
    id: 13,
    title: "Хоббит: Битва пяти воинств",
    type: "movie",
    rating: 5,
    duration: "2ч 24м",
    image: "https://static.okko.tv/images/v4/8d32c036-de54-4188-9d43-30322bf7fdd2?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/31f97213-c34c-4189-97af-54d56c61d779",
    service: "Boosty"
  },
  {
    id: 14,
    title: "Властелин колец: Братство Кольца",
    type: "movie",
    rating: 5,
    duration: "2ч 58м",
    image: "https://static.okko.tv/images/v4/9395dcaa-9b4b-4d32-9fa0-c7a3ff2ef830?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/19530629-61f1-433b-95ad-6dc67dfbea4c",
    service: "Boosty"
  },
  {
    id: 15,
    title: "Властелин колец: Две крепости",
    type: "movie",
    rating: 5,
    duration: "2ч 59м",
    image: "https://avatars.mds.yandex.net/i?id=c2783820cd9edd35bf04d1239c6840e8_l-10354912-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/cbd4316b-bb6f-49c5-bd1f-5e9d3831c5b9",
    service: "Boosty"
  },
  {
    id: 16,
    title: "Властелин колец: Возвращение короля",
    type: "movie",
    rating: 5,
    duration: "2ч 59м",
    image: "https://static.okko.tv/images/v4/3860ce3d-2aac-48bd-8079-9159a7c92bba?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/a08a4de3-9a9b-4338-9cbc-3d42ee7511bd",
    service: "Boosty"
  },
  {
    id: 17,
    title: "Звездные войны: Скрытая угроза",
    type: "movie",
    rating: 3,
    duration: "2ч 16м",
    image: "https://avatars.mds.yandex.net/i?id=1aee39daa65988e151b59670391f0b45_l-8236365-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/0969062f-d1c8-4794-b61a-850245acae43",
    service: "Boosty"
  },
  {
    id: 18,
    title: "Звездные войны: Атака клонов",
    type: "movie",
    rating: 3,
    duration: "2ч 22м",
    image: "https://static.okko.tv/images/v4/afcfb359-5e92-49af-bd90-abd6feb63f4e?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/6bc534d2-1c66-412d-b8ed-c1362c4c91cc",
    service: "Boosty"
  },
  {
    id: 19,
    title: "Звездные войны: Месть ситхов",
    type: "movie",
    rating: 3,
    duration: "2ч 20м",
    image: "http://kt.server-img.lfstrm.tv/image/aHR0cHM6Ly9rdC1pbWFnZXMuc2VydmVyLWNtcy5sZnN0cm0udHYvYXJjaGl2ZS1pbWcvbWVkaWEvMjkvMWEvMjkxYTY3ZDUzNzM0NTBkY2UyMWRmNjRkZThhYzFiNTQ=?width=1440&height=576&quality=93",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/6a468516-18ed-4b07-b135-56e504235d17",
    service: "Boosty"
  },
  {
    id: 20,
    title: "Рататуй",
    type: "movie",
    rating: 5,
    duration: "1ч 51м",
    image: "https://static.okko.tv/images/v4/fd202d46-26ce-4a4a-9120-c97a0e92e801?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/5cd17b4a-1a92-44d6-8d9d-005cc23abf61",
    service: "Boosty"
  },
  {
    id: 21,
    title: "Изгой-один",
    type: "movie",
    rating: 5,
    duration: "2ч 13м",
    image: "https://kt.server-img.lfstrm.tv/image/aHR0cHM6Ly9rdC1pbWFnZXMuc2VydmVyLWNtcy5sZnN0cm0udHYvYXJjaGl2ZS1pbWcvbWVkaWEvNGYvZTEvNGZlMTc2OGQxY2M2MTc4YWRkYTQ1MzdkNGFiZTJhYjk=?width=1440&height=576&quality=93",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/52cf2591-6940-4ae2-9e23-655c50eab56b",
    service: "Boosty"
  },
  {
    id: 22,
    title: "Хан Соло",
    type: "movie",
    rating: 4,
    duration: "2ч 15м",
    image: "https://static3.go3.tv/scale/go3/webuploads/rest/upload/vod/4880719/images/19151791?dsth=1080&dstw=1920&srcmode=0&quality=65&type=1&srcx=1&srcy=1&srcw=1/1&srch=1/1",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/770f0987-02a9-43f4-9ec7-51550603b355",
    service: "Boosty"
  },
  {
    id: 23,
    title: "Константин: Повелитель тьмы",
    type: "movie",
    rating: 5,
    duration: "2ч 1м",
    image: "http://smotreshka.server-img.lfstrm.tv/image/aHR0cHM6Ly9jbXMuc21vdHJlc2hrYS50di9hcmNoaXZlLWltZy9zdGF0aWMvbWVkaWEvOTEvODcvOTE4N2M0NTA3NTM5ODI4MTM2Yjk1YWNiMGQxMjQ2MzIuanBn?width=1440&height=576&quality=93",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/b742ca30-b731-409b-ac0d-c3a4cff39bfe",
    service: "Boosty"
  },
  {
    id: 24,
    title: "Пираты Карибского моря: Проклятие Черной жемчужины",
    type: "movie",
    rating: 5,
    duration: "2ч 13м",
    image: "https://static.okko.tv/images/v4/64702f76-879e-4afb-b66e-4019f436bf1c?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/29857ad8-972d-44fb-9489-e73702a4bfae",
    service: "Boosty"
  },
  {
    id: 25,
    title: "Пираты Карибского моря: Сундук мертвеца",
    type: "movie",
    rating: 5,
    duration: "2ч 31м",
    image: "https://static.okko.tv/images/v4/1a3dd169-0fa7-4227-bc60-64b2069b469d?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/ca66a739-efbf-486d-a3dc-e7c04be4abf8",
    service: "Boosty"
  },
  {
    id: 26,
    title: "Пираты Карибского моря: На краю света",
    type: "movie",
    rating: 5,
    duration: "2ч 49м",
    image: "https://static.okko.tv/images/v4/b6c0d02b-b059-497f-ab2f-c2fa92ad30d8?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/6235103a-7bbe-432f-b905-3c3456558f41",
    service: "Boosty"
  },
  {
    id: 27,
    title: "Пираты Карибского моря: На странных берегах",
    type: "movie",
    rating: 3,
    duration: "2ч 16м",
    image: "https://static.okko.tv/images/v4/cb90bff6-b22e-45d9-ad05-1b32c8fe58b0?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/0d3756b6-e227-499b-b50e-41ed76f7c41e",
    service: "Boosty"
  },
  {
    id: 28,
    title: "Пираты Карибского моря: Мертвецы не рассказывают сказки",
    type: "movie",
    rating: 3,
    duration: "2ч 9м",
    image: "https://static.okko.tv/images/v4/0b397beb-1817-43e9-8254-56b3976120cc?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/34ccf910-8add-4426-9be2-8bb246b5e700",
    service: "Boosty"
  },
  {
    id: 29,
    title: "Баллада Бастера Скраггса",
    type: "movie",
    rating: 3,
    duration: "2ч 13м",
    image: "https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/movie_shots/5/2/2/8355225/850b75c792f3c58f242ad63ee00cba58.jpeg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/9f3c1c2b-3805-4b41-8266-55efb2c2406d",
    service: "Boosty"
  },
  {
    id: 30,
    title: "Дюна (2021)",
    type: "movie",
    rating: 5,
    duration: "2ч 35м",
    image: "https://static3.go3.tv/scale/go3/imagesVOD/148605454.jpg?dsth=1080&dstw=1920&srcmode=0&quality=80&srcx=0&srcy=0&srcw=1/1&srch=1/1&type=2",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/5c5ee36c-a1fa-40da-8f5e-77351d8fd0a4",
    service: "Boosty"
  },
  {
    id: 31,
    title: "Власть",
    type: "movie",
    rating: 3,
    duration: "2ч 12м",
    image: "https://static.okko.tv/images/v4/87d592f8-6b93-4a13-be2c-56dd1dc34899?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/2bc86285-2cd8-4eea-9f44-5e8213be1f29",
    service: "Boosty"
  },
  {
    id: 32,
    title: "Зодиак",
    type: "movie",
    rating: 4,
    duration: "2ч 38м",
    image: "https://avatars.mds.yandex.net/i?id=da8b393878f74a2346b8fcd8f9f2fb44_l-12753090-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/74fe4bce-ff56-4bcd-b672-22eda1a0f3b4",
    service: "Boosty"
  }
];

const typeMap = {
  movie: { label: "Фильм", emoji: "🎬", color: "#f15f2c" },
  anime: { label: "Аниме", emoji: "🌸", color: "#c026d3" },
  game: { label: "Игра", emoji: "🎮", color: "#10b981" }
};

let currentMinRating = 0;
let searchTerm = "";

function updateSortVisibility() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;
  sortSelect.style.display = currentMinRating === 0 ? '' : 'none';
}

// Генерация звёзд
function getStarHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'star-filled' : 'star-empty'}">★</span>`;
  }
  return html;
}

// Создание кнопок рейтинга
function createRatingButtons() {
  const container = document.getElementById('rating-buttons');
  const ratings = [
    { min: 0, text: "Все рейтинги", stars: "★★★★★" },
    { min: 5, text: "5 звёзд", stars: "★★★★★" },
    { min: 4, text: "4 звезды", stars: "★★★★☆" },
    { min: 3, text: "3 звезды", stars: "★★★☆☆" },
    { min: 2, text: "2 звезды", stars: "★★☆☆☆" },
    { min: 1, text: "1 звезда", stars: "★☆☆☆☆" }
  ];

  container.innerHTML = ratings.map(r => `
        <button data-min="${r.min}" class="rating-btn ${r.min === 0 ? 'active' : ''}">
            <span>${r.text}</span>
            <span style="color: ${r.min === 0 ? '#888' : '#f15f2c'}">${r.stars}</span>
        </button>
    `).join('');

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMinRating = parseInt(btn.dataset.min);
      container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateSortVisibility();
      renderCards();
    });
  });
}

// Фильтрация элементов
function getFilteredItems() {
  const checkedTypes = Array.from(document.querySelectorAll('.type-check:checked')).map(el => el.value);

  return items.filter(item => {
    const matchSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = checkedTypes.length === 0 || checkedTypes.includes(item.type);
    const matchRating = currentMinRating === 0 ? true : item.rating === currentMinRating;
    return matchSearch && matchType && matchRating;
  });
}

// Рендер карточек
function renderCards() {
  const filtered = getFilteredItems();
  const grid = document.getElementById('cards-grid');
  const sortMode = document.getElementById('sort-select').value;

  let sorted = [...filtered];
  if (sortMode === 'rating-desc') sorted.sort((a, b) => b.rating - a.rating);
  if (sortMode === 'rating-asc') sorted.sort((a, b) => a.rating - b.rating);

  let html = '';

  if (sorted.length === 0) {
    html = `<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #666;">Ничего не найдено</p>`;
  } else {
    sorted.forEach(item => {
      const type = typeMap[item.type];
      html += `
                <div class="card" onclick="showDetail(${item.id})">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-body">
                        <div class="type-badge" style="background-color: ${type.color}20; color: ${type.color}">
                            ${type.emoji} ${type.label}
                        </div>
                        <div class="card-title">${item.title}</div>
                        <div class="stars">${getStarHTML(item.rating)}</div>
                        <div class="card-duration">${item.duration}</div>
                    </div>
                </div>
            `;
    });
  }

  grid.innerHTML = html;
  document.getElementById('count-badge').textContent = sorted.length;
}

// Показать детальную информацию
function showDetail(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  const type = typeMap[item.type];

  document.getElementById('detail-image').src = item.image;
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-stars').innerHTML = getStarHTML(item.rating);
  document.getElementById('detail-rating-text').innerHTML = `${item.rating} <span style="font-size:1rem; color:#888">/ 5</span>`;
  document.getElementById('detail-duration').textContent = item.duration;
  document.getElementById('detail-review').textContent = item.review;

  // Тип
  const typeBadge = document.getElementById('detail-type-badge');
  typeBadge.textContent = `${type.emoji} ${type.label}`;
  typeBadge.style.backgroundColor = type.color + '20';
  typeBadge.style.color = type.color;

  // Кнопка смотреть
  const watchBtn = document.getElementById('detail-watch-link');
  watchBtn.href = item.watchUrl;
  watchBtn.textContent = `Смотреть на ${item.service}`;

  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');

  // прокрутка к началу, чтобы кнопка "Вернуться к списку" всегда была видна
  window.scrollTo({
    top: 0,
    behavior: 'instant' in window ? 'instant' : 'smooth'
  });
}

function hideDetail() {
  document.getElementById('detail-view').classList.add('hidden');
  document.getElementById('home-view').classList.remove('hidden');
}

function resetFilters() {
  currentMinRating = 0;
  searchTerm = '';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.type-check').forEach(cb => cb.checked = false);

  document.querySelectorAll('#rating-buttons button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.min === '0');
  });

  updateSortVisibility();
  renderCards();
}

// Инициализация
function init() {
  createRatingButtons();

  // Поиск в реальном времени
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderCards();
  });

  // Чекбоксы
  document.querySelectorAll('.type-check').forEach(cb => {
    cb.addEventListener('change', renderCards);
  });

  updateSortVisibility();
  renderCards();
}

// Запуск
window.onload = init;
