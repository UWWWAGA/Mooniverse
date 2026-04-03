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
    service: "Boosty",
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
  },
  {
    id: 33,
    title: "Голый пистолет",
    type: "movie",
    rating: 5,
    duration: "1ч 25м",
    image: "https://static.okko.tv/images/v4/54156cd8-499d-45be-aaa7-fafe805fd887?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/80ee161f-103f-46eb-9677-339216ee29c0",
    service: "Boosty"
  },
  {
    id: 34,
    title: "Маяк",
    type: "movie",
    rating: 1,
    duration: "1ч 49м",
    image: "https://wallpapercat.com/w/full/c/b/8/2034838-1920x1080-desktop-1080p-the-lighthouse-2019-background.jpg",
    review: "Моё новое животное - дроп, Маяк - пиздец",
    watchUrl: "https://boosty.to/mooniverse/posts/85c54026-d777-4145-87f2-e74828211c32",
    service: "Boosty"
  },
  {
    id: 35,
    title: "Тайлер Рэйк: Операция по спасению",
    type: "movie",
    rating: 2,
    duration: "1ч 56м",
    image: "https://avatars.mds.yandex.net/i?id=32ff6cc879f06a3ab8d59871e2bfed5e_l-4797777-images-thumbs&n=13",
    review: "Фильм вызвал у меня смешанные чувства,  весьма дефолтный сюжет с историей о спасении заложника уже много раз использовалась в кино и вау эффекта не случилось.  Неразвитые персонажи, абсолютно мало информации, чтобы как-то ими проникнуться, линейный сюжет с читаемыми поворотами, пресно, но на разок пойдет",
    watchUrl: "https://boosty.to/mooniverse/posts/04b6b799-60e9-49c5-8263-3fc5ab582619",
    service: "Boosty"
  },
  {
    id: 36,
    title: "Скиф",
    type: "movie",
    rating: 2,
    duration: "1ч 40м",
    image: "https://static.okko.tv/images/v4/00ac2807-49d1-4ef1-84c8-34b283648b01?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Данная картина является примером того, что рейтинг обманчив, её рейтинг составляет 6.8, но это все лишь иллюзия!  Посмотрев сие, могу сказать одно, восторга у меня это не вызвало, странные диалоги, плохая операторская работа излишний пафос.  Диалоги являются важной частью любого кино, так как от них зависит передача эмоций персонажа, развитие сюжета, здесь же диалоги оставляют желать лучшего, они не естественные, плохо поставленные.  Качество съемки и композиция кадров -  просто пиздец, камера постоянно трясётся, для передачи экшн эффекта, но это не экшн, это кал!  Далее, чрезмерное использование эпических мотивов, элементов фентези, абсолютное отсутствие баланса между жизненностью и их величием, ГГ зверь передает привет! ПРОХОДНЯК  4/10  ",
    watchUrl: "https://boosty.to/mooniverse/posts/84c9987e-b987-4453-a33e-9de6c971b786",
    service: "Boosty"
  },
  {
    id: 37,
    title: "Пиджак",
    type: "movie",
    rating: 5,
    duration: "1ч 42м",
    image: "https://uztel.server-img.lfstrm.tv/image/aHR0cDovL3V6dGVsLnNlcnZlci1jbXMubGZzdHJtLnR2L2FyY2hpdmUtaW1nL3N0YXRpYy9tZWRpYS84Mi8zMC84MjMwYjVkMGU0NDNlYjY4NDlhMjI1OGZhZWJhZjJkYw==",
    review: "Как я и сказал на стриме, фильм опередивший своё время на мой взгляд, оценка на КП 7.8 (на основе 237 тысяч оценок), провалившийся и не окупившийся на релизе, а по факту является очень даже хорошим кино, в каком-то смысле, это даже шедевр. с первых минут, тебе окутывает шизофрения и абсолютное не понимание, но с каждой минутой фильм тебя поглощает и разогревает в тебе интерес. шикарный каст актёров, отличный олд скульный цветокор и тип съемки. фильм несет чёткое повествование, что жизнь это череда событий, череда выбора и что каждое наше действие, малейший шаг, может изменить будущее, наша жизнь в наших руках, после просмотра он оставил у меня эффект размышления о прошлом, настоящем, будущем, немногие кинокартины могут в подобное, поэтому несомненно большой плюс данному кино. пиджак - это триллер, драма, фантастика, эдакая сборная солянка послевкусие которой вызывает лишь светлые чувства. греющей надеждой, а так же с серым хэппи эндом, ну вот как можно сказать об этом плохо? 8/10 - рекомендую к просмотру однозначно, в компании с друзьями или девушкой даже пересмотрел бы его ещё раз, круто, это реально круто!",
    watchUrl: "https://boosty.to/mooniverse/posts/0f03f12f-6bf4-4ea0-96c0-96198261976f",
    service: "Boosty"
  },
  {
    id: 38,
    title: "Однажды в Ирландии",
    type: "movie",
    rating: 5,
    duration: "1ч 36м",
    image: "https://avatars.mds.yandex.net/i?id=3fdf16d50add2c539d634b936c71c04942e01d6b-10917150-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/f70a5c72-670a-4a89-9e67-bdbd8dd26751",
    service: "Boosty"
  },
  {
    id: 39,
    title: "Быстрее пули",
    type: "movie",
    rating: 5,
    duration: "2ч 6м",
    image: "https://avatars.mds.yandex.net/i?id=0897154dcc96f559a1c6b826cd4aeebeb6941a20-5288062-images-thumbs&n=13",
    review: "Стильно, модно, молодёжно и актёрский состав классный, сюжет непонятный по началу, но он и не нужен, просто смотри и наслаждайся!",
    watchUrl: "https://boosty.to/mooniverse/posts/b0650a84-76b5-4132-877c-21c96f0f1712",
    service: "Boosty"
  },
  {
    id: 40,
    title: "Человек Паук: Через Вселенные",
    type: "movie",
    rating: 2,
    duration: "1ч 57м",
    image: "https://avatars.mds.yandex.net/i?id=30ddbd44e6ca77ad3e30ee476c9423f59cf3faa6-5877187-images-thumbs&n=13",
    review: "Сомнительно... Ну.. Окэй..?   Очень средненький мульт в стиле марвел, рассчитан на детскую аудиторию, или аудиторию желчных пубертатных подростков, не впечатлён. На один раз пойдет, средний средняк!",
    watchUrl: "https://boosty.to/mooniverse/posts/c858e1dd-2858-418a-ba5e-e937bd9ec6dd",
    service: "Boosty"
  },
  {
    id: 41,
    title: "Братья из Гримсби",
    type: "movie",
    rating: 5,
    duration: "1ч 23м",
    image: "https://smotreshka.server-img.lfstrm.tv/image/aHR0cHM6Ly9jbXMuc21vdHJlc2hrYS50di9hcmNoaXZlLWltZy9zdGF0aWMvbWVkaWEvZTAvN2UvZTA3ZTNlYjU3M2RkZGEzYzc2ZGFhMmYwNjBlNjE0MDY=",
    review: "Лучшее из комедий за последнее время! Что-то в духе очень страшного кина! Советую!",
    watchUrl: "https://boosty.to/mooniverse/posts/3f72200e-7905-41f5-9c5f-1fc8b5f1c96b",
    service: "Boosty"
  },
  {
    id: 42,
    title: "Удар",
    type: "movie",
    rating: 5,
    duration: "2ч 26м",
    image: "https://media5.bollywoodhungama.in/wp-content/uploads/2016/03/87451694.jpg",
    review: "Без рецензии! Без оценок! Коротко и чётко! Д Р А Й В",
    watchUrl: "https://boosty.to/mooniverse/posts/07db2f61-2c64-4e86-a6c1-778f4f92ca34",
    service: "Boosty"
  },
  {
    id: 43,
    title: "Голоса",
    type: "movie",
    rating: 4,
    duration: "1ч 43м",
    image: "http://akado.server-img.lfstrm.tv/image/aHR0cHM6Ly9ha2Fkby5zZXJ2ZXItY21zLmxmc3RybS50di9hcmNoaXZlLWltZy9zdGF0aWMvbWVkaWEvNmMvMzIvNmMzMjg3Mjk1MTBiMTllNjE3OTQ4ZGMxYjhiMjA0YmM=",
    review: "Что-то странное, что-то непонятное, что-то неприятное и что-то про психов, но весело 7 шиз из 10",
    watchUrl: "https://boosty.to/mooniverse/posts/215d1fd4-d100-42ae-a130-e91f205a846a",
    service: "Boosty"
  },
  {
    id: 44,
    title: "Джентельмены",
    type: "movie",
    rating: 4,
    duration: "1ч 53м",
    image: "https://avatars.mds.yandex.net/i?id=edd21f3580f097d7423dcf292b82840d_l-6296552-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/86be12a2-18a3-4900-89e8-808160439124?share=post_link",
    service: "Boosty"
  },
  {
    id: 45,
    title: "Оружейный барон",
    type: "movie",
    rating: 4,
    duration: "2ч 22м",
    image: "https://avatars.mds.yandex.net/i?id=e71f79dbcd2082e9a4cdef916db19aba2c59416d-3717662-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/34d8baaf-7a06-4b71-bd12-ba249ed6dc8b?share=post_link",
    service: "Boosty"
  },
  {
    id: 46,
    title: "Типа крутые легавые",
    type: "movie",
    rating: 4,
    duration: "2ч 1м",
    image: "https://static.okko.tv/images/v4/30b73923-a9d9-49aa-9eb2-6bcce024910d?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://avatars.mds.yandex.net/i?id=58f9bdf1bc4210668daa135a493c0b407b6ac93c-5300391-images-thumbs&n=13",
    service: "Boosty"
  },
  {
    id: 47,
    title: "Брюс Всемогущий",
    type: "movie",
    rating: 4,
    duration: "1ч 37м",
    image: "https://avatars.mds.yandex.net/i?id=063240f4f4db9e4f94888f3273ddc9cb_l-10414886-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/93b26a73-35cc-4d3d-95fa-9c05f85997b7?share=post_link",
    service: "Boosty"
  },
  {
    id: 48,
    title: "Меч Короля Артура",
    type: "movie",
    rating: 4,
    duration: "2ч 6м",
    image: "https://avatars.mds.yandex.net/i?id=6e76fa52f52ef5c9ab2caf28b53d36e864be9fb3-5287716-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/772fc0ac-08bb-4a74-b37b-c8d3e71c88f7?share=post_link",
    service: "Boosty"
  },
  {
    id: 49,
    title: "Оппенгеймер",
    type: "movie",
    rating: 5,
    duration: "3ч",
    image: "https://avatars.mds.yandex.net/i?id=545974fb98e7f902acc8b160c02014110680ff4e-10695851-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/23f09d9c-b7eb-446d-b3b6-c40541f31dd3?share=post_link",
    service: "Boosty"
  },
  {
    id: 50,
    title: "Зомби по имени Шон",
    type: "movie",
    rating: 4,
    duration: "1ч 40м",
    image: "https://avatars.mds.yandex.net/i?id=e2096fbe9a04f2bbe0bd7cff4ec540f4_l-11842117-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/c55c6a1f-4842-48dc-9c1d-6d379b3ef454?share=post_link",
    service: "Boosty"
  },
  {
    id: 51,
    title: "Области тьмы",
    type: "movie",
    rating: 5,
    duration: "1ч 45м",
    image: "https://avatars.mds.yandex.net/i?id=0af305ba410eec97613dc739c5128220_l-10637415-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/37a88434-1bcd-402d-ab43-97712996d76c?share=post_link",
    service: "Boosty"
  },
  {
    id: 52,
    title: "Апгрейд",
    type: "movie",
    rating: 4,
    duration: "1ч 40м",
    image: "https://avatars.mds.yandex.net/i?id=13dec7f5f283fae827c9501f6604814626b65760-5300391-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/537eeddf-4271-48c2-90b0-9d78311f6c99?share=post_link",
    service: "Boosty"
  },
  {
    id: 53,
    title: "Армагеддец",
    type: "movie",
    rating: 3,
    duration: "1ч 49м",
    image: "https://avatars.mds.yandex.net/i?id=73dbc93beac9b08a01a7546465f012529bb323a9-16452479-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/b15a64f7-4a25-47e1-a077-24166963a6c0?share=post_link",
    service: "Boosty"
  },
  {
    id: 54,
    title: "Царство небесное",
    type: "movie",
    rating: 5,
    duration: "2ч 25м",
    image: "https://avatars.mds.yandex.net/i?id=267f4432236d1356a39e616654b25d9e16218d34-4857366-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/f478782e-ea96-4c91-97a0-e8bc8e3500e4?share=post_link",
    service: "Boosty"
  },
  {
    id: 55,
    title: "Гладиатор",
    type: "movie",
    rating: 5,
    duration: "2ч 35м",
    image: "https://avatars.mds.yandex.net/i?id=84b3bef054e2899ce9829fc9c0ca4e6b_l-5668696-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/244d1431-c7f1-4982-938b-f2991b70afc6?share=post_link",
    service: "Boosty"
  },
  {
    id: 56,
    title: "Грязь",
    type: "movie",
    rating: 3,
    duration: "1ч 33м",
    image: "https://static.okko.tv/images/v4/95ff3f57-c3e0-4054-a182-e4e5eec23266?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/5e563eaf-b940-42be-9251-44f87baf181f?share=post_link",
    service: "Boosty"
  },
  {
    id: 57,
    title: "Аватар",
    type: "movie",
    rating: 4,
    duration: "2ч 42м",
    image: "https://avatars.mds.yandex.net/i?id=f8aa21a16ce2e162a0aad8adb18fc81a723478e5-4275030-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/39229013-c916-4413-9977-f758fceb0190?share=post_link",
    service: "Boosty"
  },
  {
    id: 58,
    title: "Аватар: Путь воды",
    type: "movie",
    rating: 3,
    duration: "3ч 12м",
    image: "https://avatars.mds.yandex.net/i?id=6566048adff28289404ddec9862fbf9a1c5146db-7665183-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/39229013-c916-4413-9977-f758fceb0190?share=post_link",
    service: "Boosty"
  },
  {
    id: 59,
    title: "Ипман",
    type: "movie",
    rating: 3,
    duration: "1ч 46м",
    image: "https://avatars.mds.yandex.net/i?id=42661b4ab5a2dda36bdbc61d08428ef55e380875-16439513-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/0b0e8ceb-948b-4d7b-80e1-fa64744f337c?share=post_link",
    service: "Boosty"
  },
  {
    id: 60,
    title: "Варяг",
    type: "movie",
    rating: 3,
    duration: "2ч 17м",
    image: "https://avatars.mds.yandex.net/i?id=c2e3325f1980925c84b4fa78335afcc8b285c8c3-9381177-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/dfa09271-0d55-4dc8-90ca-7d31e8f4bf51?share=post_link",
    service: "Boosty"
  },
  {
    id: 61,
    title: "Чужой (1979)",
    type: "movie",
    rating: 5,
    duration: "1ч 56м",
    image: "https://avatars.mds.yandex.net/i?id=d24199d0c720b38394000d045d8c51dbef983b70-4589708-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/2a760584-37d9-457b-b9b5-53e4be9b3a93?share=post_link",
    service: "Boosty"
  },
  {
    id: 62,
    title: "Чужой 2 (1986)",
    type: "movie",
    rating: 5,
    duration: "2ч 42м",
    image: "https://avatars.mds.yandex.net/i?id=6309be2047644ac3161d101282d33f5cb7883cf5-4538573-images-thumbs&n=13",
    review: "10/10, на мой взгляд этот фильм экранизация правильного экшн-хоррора, который наполнен отличными, живыми персонажами, за которых ты переживаешь на протяжении всего фильма. Главная героиня, второстепенные персонажи, все подобраны изумительно! Редко ставлю фильмам такую оценку, но здесь прям всё идеально.",
    watchUrl: "https://boosty.to/mooniverse/posts/339e8eb2-d842-4983-a966-05c4e4ae17e1?share=post_link",
    service: "Boosty"
  },
  {
    id: 63,
    title: "Микки-17",
    type: "movie",
    rating: 4,
    duration: "2ч 17м",
    image: "https://avatars.mds.yandex.net/i?id=0aea796bb35c771f7f22ab2160217732_l-12679713-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/830505df-076f-42fc-8df4-dc4356885d6b?share=post_link",
    service: "Boosty"
  },
  {
    id: 64,
    title: "Чародеи (1982)",
    type: "movie",
    rating: 3,
    duration: "2ч 27м",
    image: "https://avatars.mds.yandex.net/i?id=ef7d324329748c52a23b2d5791fa9ae21e0e4e4e-12992500-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/855d2e64-df63-4285-9549-0aecd63e3ef2?share=post_link",
    service: "Boosty"
  },
  {
    id: 65,
    title: "Человек Швейцарский Нож",
    type: "movie",
    rating: 3,
    duration: "1ч 37м",
    image: "https://avatars.mds.yandex.net/i?id=e86a48a0701141af5b2b814505b96026c6bcd790-4569264-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/f1b9e584-1bba-4137-9112-cb2a4dec9e1b?share=post_link",
    service: "Boosty"
  },
  {
    id: 66,
    title: "Подземелья и Драконы",
    type: "movie",
    rating: 3,
    duration: "2ч 14м",
    image: "https://avatars.mds.yandex.net/i?id=5bc994f14f9db5a509b7e7dd53bde7d3_l-9147831-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/c131c6a0-88b3-4d44-89ba-045d63b92a7e?share=post_link",
    service: "Boosty"
  },
  {
    id: 67,
    title: "Довод (2020)",
    type: "movie",
    rating: 3,
    duration: "2ч 30м",
    image: "https://avatars.mds.yandex.net/i?id=c669232d4e26c7136cf15686f68fcfd700c3548e-5355267-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/4cfa7ade-8ba0-4d6b-af1a-29729bc4f0ec?share=post_link",
    service: "Boosty"
  },
  {
    id: 68,
    title: "Новый Порядок",
    type: "movie",
    rating: 3,
    duration: "1ч 26м",
    image: "https://static.okko.tv/images/v4/10e34406-a722-4831-8343-66e8107e3c05",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/7e6b3b44-eaed-495b-a960-1dee5ac183ad?share=post_link",
    service: "Boosty"
  },
  {
    id: 69,
    title: "Реальные Упыри",
    type: "movie",
    rating: 5,
    duration: "1ч 25м",
    image: "https://avatars.mds.yandex.net/i?id=ee10bdd5e7053d69e16ac29d37c8ecc97dc3c716-6438015-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/7e6b3b44-eaed-495b-a960-1dee5ac183ad?share=post_link",
    service: "Boosty"
  },
  {
    id: 70,
    title: "Загадочная История Бенджамина Баттона",
    type: "movie",
    rating: 5,
    duration: "2ч 46м",
    image: "https://static3.go3.tv/scale/go3/images/epg_8f2c0f96d3a41aa5f20855a4338ead5f.jpeg?dsth=1080&dstw=1920&srcmode=0&quality=65&srcx=0&srcy=0&srcw=1/1&srch=1/1&type=1",
    review: "10/10, на мой взгляд этот фильм экранизация правильного экшн-хоррора, который наполнен отличными, живыми персонажами, за которых ты переживаешь на протяжении всего фильма. Главная героиня, второстепенные персонажи, все подобраны изумительно! Редко ставлю фильмам такую оценку, но здесь прям всё идеально.",
    watchUrl: "https://boosty.to/mooniverse/posts/4e756788-742a-4010-b2c6-91a09e5591b4?share=post_link",
    service: "Boosty"
  },
  {
    id: 71,
    title: "Психопаспорт",
    type: "anime",
    rating: 1,
    duration: "1д 14ч 5м",
    image: "https://avatars.mds.yandex.net/i?id=427fa727028aa224287d63c1661cc524e7385d23-4557823-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/31083621-51ed-4310-b164-a2b075b63ba2",
    service: "Boosty",
    isDrop: true
  },
  {
    id: 72,
    title: "Киберпанк: Бегущие по краю",
    type: "anime",
    rating: 5,
    duration: "4ч",
    image: "https://media.kg-portal.ru/anime/c/cyberpunkedgerunners/posters/cyberpunkedgerunners_2.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/8785f47b-982a-492d-b1d8-3b7538a1c1ae",
    service: "Boosty"
  },
  {
    id: 73,
    title: "Атака Титанов",
    type: "anime",
    rating: 5,
    duration: "1д 14ч",
    image: "https://avatars.mds.yandex.net/i?id=c0d30da10f59a2342e4619a664f99605_l-5859250-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом... А запись удалена",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 74,
    title: "Совершенно новый зверь",
    type: "anime",
    rating: 1,
    duration: "4ч 24ч",
    image: "https://avatars.mds.yandex.net/i?id=028a13cd3e5dc70a158cccc274678bf6_l-8496372-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/85c54026-d777-4145-87f2-e74828211c32",
    service: "Boosty",
    isDrop: true
  },
  {
    id: 75,
    title: "Блич",
    type: "anime",
    rating: 4,
    duration: "134ч",
    image: "https://images-s.kinorium.com/movie/poster/330650/w1500_51911028.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/17d1b692-5ffb-4fef-8488-47ce079a04d7",
    service: "Boosty"
  },
  {
    id: 76,
    title: "Гуррен-Лаганн",
    type: "anime",
    rating: 4,
    duration: "1ч 58м",
    image: "https://static.okko.tv/images/v4/60e772c6-ea31-4bfb-8c34-40121d27f05c?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/e49c66e3-c646-48b7-a0f5-ef778d150a19",
    service: "Boosty"
  },
  {
    id: 77,
    title: "Выдающиеся звери",
    type: "anime",
    rating: 1,
    duration: "18ч 37м",
    image: "https://avatars.mds.yandex.net/i?id=9934bdacd38ffc989f5b5df9d9dbcb49_l-4469558-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/17d1b692-5ffb-4fef-8488-47ce079a04d7",
    service: "Boosty",
    isDrop: true
  },
  {
    id: 78,
    title: "Триган",
    type: "anime",
    rating: 2,
    duration: "12ч 24м",
    image: "https://i4.imageban.ru/out/2012/05/07/ee86069e238b2d23423aec9fe15be51e.png",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/bf9393c9-55b5-4f9b-acea-f957cee2493e?share=post_link",
    service: "Boosty"
  },
  {
    id: 79,
    title: "Унесённые призраками",
    type: "anime",
    rating: 5,
    duration: "2ч 4м",
    image: "https://avatars.mds.yandex.net/i?id=d93ba5f99b4d1622e616f87ce6f18c4b_l-10025596-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/8d042eb5-4907-4789-bee5-0a254df8c3f0?share=post_link",
    service: "Boosty"
  },
  {
    id: 80,
    title: "Ходячий замок",
    type: "anime",
    rating: 5,
    duration: "2ч",
    image: "https://avatars.mds.yandex.net/i?id=db78ccc00ddfc8c05a2d3c822dbaa9a83d6dd932-5231671-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом... А запись удалена",
    watchUrl: "https://boosty.to/mooniverse/posts/57d0afb7-9f94-485d-8e55-8801e84a974c?share=post_link",
    service: "Boosty"
  },
  {
    id: 81,
    title: "Принцесса Мононоке",
    type: "anime",
    rating: 5,
    duration: "2ч 13м",
    image: "https://static.okko.tv/images/v4/193b5f8b-2638-4d3a-ac50-a5b03f2c29ed?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/d9277c34-de61-4e1c-8da4-2af19fc7fdbe?share=post_link",
    service: "Boosty"
  },
  {
    id: 82,
    title: "Ведьмина служба доставки",
    type: "anime",
    rating: 5,
    duration: "1ч 43м",
    image: "https://avatars.mds.yandex.net/i?id=33b1dd38e0509143e30d9b64b03663fa_l-12532507-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/df41fe6a-c654-4330-bd52-05c88d85026d?share=post_link",
    service: "Boosty"
  },
  {
    id: 83,
    title: "Ветер крепчает",
    type: "anime",
    rating: 5,
    duration: "2ч 6м",
    image: "https://avatars.mds.yandex.net/i?id=33202ccbf0f9d7d7858af950de6666efd61ae958-3525596-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/4c8e814a-c06c-4723-9a56-5bd5a7068982?share=post_link",
    service: "Boosty"
  },
  {
    id: 84,
    title: "Навсикая из долины ветров",
    type: "anime",
    rating: 5,
    duration: "1ч 57м",
    image: "https://avatars.mds.yandex.net/i?id=12b4d85bc6bcb42e8fdbbd0c9367da12_l-7051380-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/4801b7e1-ed6f-4f4a-a0b2-4bf225a823c7?share=post_link",
    service: "Boosty"
  },
  {
    id: 85,
    title: "Человек - Бензопила",
    type: "anime",
    rating: 5,
    duration: "4ч 48м",
    image: "https://cdn.mos.cms.futurecdn.net/sTxkUy4Qcuw4NK4R6kNoEo-1920-80.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/1c9b7220-6860-4363-b556-ffcf796ad982?share=post_link",
    service: "Boosty"
  },
  {
    id: 86,
    title: "Пираты Чёрной лагуны",
    type: "anime",
    rating: 3,
    duration: "9ч 36м",
    image: "https://avatars.mds.yandex.net/i?id=52a8b75c9cd4ba629db11d77a6a262d6_l-12422585-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/91fbe8ae-55d0-4612-9d9c-6e3ab55bcf22?share=post_link",
    service: "Boosty"
  },
  {
    id: 87,
    title: "Аркейн 1 сезон",
    type: "serial",
    rating: 5,
    duration: "6ч 45м",
    image: "https://avatars.mds.yandex.net/i?id=f8e91a2091b45a8d3b4a9f5b7a5e4883d5216045-4016775-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/8559f0ba-0e29-4c64-80a3-afb41ce38563",
    service: "Boosty"
  },
  {
    id: 88,
    title: "Пацаны",
    type: "serial",
    rating: 5,
    duration: "33ч",
    image: "https://4kwallpapers.com/images/wallpapers/karl-urban-the-boys-1920x1080-15635.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/d77f6982-ca90-4828-bad5-3ed35fe32589",
    service: "Boosty"
  },
  {
    id: 89,
    title: "Пространство",
    type: "serial",
    rating: 2,
    duration: "1д 23ч 47м",
    image: "https://get.wallhere.com/photo/the-expanse-space-science-fiction-tv-series-TV-Steven-Strait-wes-chatham-Cas-Anvar-Dominique-Tipper-Amos-Burton-Jim-Holden-Naomi-Nagata-Alex-Kamal-1730959.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/258e7718-80ad-4535-b444-96042ad8ccb1",
    service: "Boosty"
  },
  {
    id: 90,
    title: "Острые Козырьки",
    type: "serial",
    rating: 3,
    duration: "36ч",
    image: "https://static.okko.tv/images/v4/39f44555-bc17-4ed0-8e09-e8479022816c?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/530f00bb-9c62-4565-81dd-a6af9dd8d077",
    service: "Boosty"
  },
  {
    id: 91,
    title: "Король Талсы",
    type: "serial",
    rating: 4,
    duration: "19ч 21м",
    image: "https://avatars.mds.yandex.net/i?id=502e3b50675aa2a92fb063cefb2f8112_l-5450106-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/c904e5a6-b935-4594-b419-4e905c4d1ff9",
    service: "Boosty"
  },
  {
    id: 92,
    title: "Клан Сопрано",
    type: "serial",
    rating: 2,
    duration: "86ч",
    image: "https://avatars.mds.yandex.net/i?id=e9978fa6854b2de2890e3316b63db416b4b3c980-5224518-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/28445ff8-9040-42ba-8c5b-e301e4f1498f",
    service: "Boosty"
  },
  {
    id: 93,
    title: "Светлячок",
    type: "serial",
    rating: 1,
    duration: "11ч 43м",
    image: "https://static.okko.tv/images/v4/c14ba8ec-0501-43c2-801e-b7da12378b72?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/f70a5c72-670a-4a89-9e67-bdbd8dd26751",
    service: "Boosty",
    isDrop: true
  },
  {
    id: 94,
    title: "Черные паруса",
    type: "serial",
    rating: 3,
    duration: "14ч 11м",
    image: "https://avatars.mds.yandex.net/i?id=b583ed69e6b4edc9784b786a743eaf125d643e14-4825287-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/0f1ab7f7-2432-4e5a-b411-6be7cbceaac0",
    service: "Boosty"
  },
  {
    id: 95,
    title: "Игра Престолов",
    type: "serial",
    rating: 5,
    duration: "69ч 23м",
    image: "https://avatars.mds.yandex.net/i?id=5738ab0ad0e2e11372b2b73481603934_l-5878191-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/5cc7952d-3929-456e-974a-6249f28fb1a2?share=post_link",
    service: "Boosty"
  },
  {
    id: 96,
    title: "Сёгун",
    type: "serial",
    rating: 4,
    duration: "9ч 50м",
    image: "https://avatars.mds.yandex.net/i?id=013fbec87cfb3879f72571410cdc813d_l-5370628-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/3ea08f2d-409d-4d36-ad1a-0677e5cedcd2?share=post_link",
    service: "Boosty"
  },
  {
    id: 97,
    title: "Полиция Токио",
    type: "serial",
    rating: 4,
    duration: "17ч 6м",
    image: "https://avatars.mds.yandex.net/i?id=b173b6bbd50c70620b4c02b6ee3992e1b928350e-5112049-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/311bba13-efbf-4ee4-82a6-723ff8834029?share=post_link",
    service: "Boosty"
  },
  {
    id: 98,
    title: "Аркейн 2 сезон",
    type: "serial",
    rating: 5,
    duration: "6ч 45м",
    image: "https://prod.assets.earlygamecdn.com/images/ArcaneFull.jpg?mtime=1666009984",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/0a4cfacd-a76a-491c-a637-9c2e940e451d?share=post_link",
    service: "Boosty"
  },
  {
    id: 99,
    title: "Дом Дракона",
    type: "serial",
    rating: 4,
    duration: "21ч",
    image: "https://static.okko.tv/images/v4/7a85fa1c-2888-46a8-a96c-636ccc4199c9?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://boosty.to/mooniverse/posts/aff005a4-4f3d-4a74-b384-2bfe2deb82fd?share=post_link",
    service: "Boosty"
  },
  {
    id: 100,
    title: "To the Moon",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://i.ytimg.com/vi/Wp9jpTOvmG4/maxresdefault.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=vUPAcitUAuE&list=PLQHOyNho0DjJkEE1Tts4gyGFyVy3gA11x",
    service: "YouTube"
  },
  {
    id: 101,
    title: "Punch Club",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=4e15b23737d587717baa211ec5402012_l-5268512-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=iYVAY1_-IyI&list=PLQHOyNho0DjKr7CG9ZG4beHlZvxJrFGjg",
    service: "YouTube"
  },
  {
    id: 102,
    title: "Dragon Age: Origins",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://assets.altarofgaming.com/wp-content/uploads/2022/03/dragon-age-origins-cover-altar-of-gaming.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=VgrhaDb-_bA&list=PLQHOyNho0DjLD0HdCvEcW9mc4zilB9N8k",
    service: "YouTube"
  },
  {
    id: 103,
    title: "M&B II: Bannerlord",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/get-mpic/12277996/2a0000018f6e4acf3694e63e13efd20f8d2c/orig",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=fN9dqrZcvD8&list=PLQHOyNho0DjLIo2aBT-gCyiuIbaf6bJaO",
    service: "YouTube"
  },
  {
    id: 104,
    title: "Visage",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://cdn.wccftech.com/wp-content/uploads/2020/11/WCCFvisage1.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=wNXr8pUFVJE&list=PLQHOyNho0DjK97qyTuD_s09-mXTze9H0P",
    service: "YouTube"
  },
  {
    id: 105,
    title: "Frostpunk",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=e34ee89c50972376413fd27c4b69efe8_l-5336269-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=xldGmk2urQ4&list=PLQHOyNho0DjIROqXmyZgT8IItHc7ZkC9J",
    service: "YouTube"
  },
  {
    id: 106,
    title: "The Wolf Among Us",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=b4f2c2bac48ab64827b954da0ab4574d_l-5235083-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=9FTHS4yqDNc&list=PLQHOyNho0DjKgHTrlkvrN4u-ePuT1_ecI",
    service: "YouTube"
  },
  {
    id: 107,
    title: "Battle Brothers",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://sun9-22.userapi.com/impg/bqEAY4jCJCak8TgoF_JX_igAvPnE85tjlhOzhQ/lGFMjlSW8QQ.jpg?quality=90&proxy=1&sign=6860468a5d7ddccb240c907af4faacb4&type=video_thumb",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=Elll4XwP3bI&list=PLQHOyNho0DjLelz6fFU8geruAP07epqoy",
    service: "YouTube"
  },
  {
    id: 108,
    title: "Granny",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=c47863e0c8715ad82dc3318917b00a71_l-5344756-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=kjm_Wu_X9D0&list=PLQHOyNho0DjJmY5UPPtwjjTPnrzb8qMlG",
    service: "YouTube"
  },
  {
    id: 109,
    title: "MARVEL Человек-Паук: Майлз Моралес",
    type: "game",
    rating: 2,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=a59dbef96e4d9b425f88fdd89671d990_l-7464698-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=asIiKXTBLck&list=PLQHOyNho0DjL49nzzVeDtZgwkFK3nN55N&index=2",
    service: "YouTube"
  },
  {
    id: 110,
    title: "Little Nightmares 2",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/get-mpic/12631449/2a0000019538b9177d81e0ead16501bb5288/orig",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=N25hSUemmu8&list=PLQHOyNho0DjL5KJSw-E14QgsnbpPyA7sL",
    service: "YouTube"
  },
  {
    id: 111,
    title: "Boshy",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://free2play.my1.ru/_ld/0/15.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=Xmhx6U6DCVg&list=PLQHOyNho0DjKwk6kQFErzA0qvCTg6sObj",
    service: "YouTube",
    isDrop: true
  },
  {
    id: 112,
    title: "Demon Souls",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=15cfcf9a1a54d41980a2a799cb542fb5f3fc6db3-8906189-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=UWrMvoytYJE&list=PLQHOyNho0DjLUjVJDxSxCMX82RR-MmQnC",
    service: "YouTube",
    isDrop: true
  },
  {
    id: 113,
    title: "The Long Dark",
    type: "game",
    rating: 3,
    duration: "",
    image: "https://avatars.mds.yandex.net/get-mpic/1715213/2a000001954d55751ec4bffdad16a217fd0c/orig",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=DWJ2Y-7qbx4&list=PLQHOyNho0DjL9Qbohq7ZyA95dcHJXoztK",
    service: "YouTube"
  },
  {
    id: 114,
    title: "Fallout: New Vegas",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://cs2.modgames.net/images/873dcb3e27175630a5dd71739fe022387e7bb80547153ac1f92611a89809ff10.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=cc9yx8ffQDw&list=PLQHOyNho0DjL6qFStj-WFmMfveOtkW9jj&index=1",
    service: "YouTube"
  },
  {
    id: 115,
    title: "Rimworld",
    type: "game",
    rating: 3,
    duration: "",
    image: "https://gfn.am/en/games/media/images/wide_art_image-rimworld-e7b04fb9.original.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=pw-7f3XisTw&list=PLQHOyNho0DjL4PCPzH0TB4FsJE4xSr28-",
    service: "YouTube"
  },
  {
    id: 116,
    title: "Detroit: Become Human",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://i.pinimg.com/originals/f6/e2/8c/f6e28c8604e814964c938da4d7c85a79.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=bDwVELXGEm0&list=PLQHOyNho0DjIcieveivE04ROFnpIn_dEZ",
    service: "YouTube"
  },
  {
    id: 117,
    title: "The Mortuary Assistant",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=4188d08fe05ca4145d282a4031f03b1f_l-5287716-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=AkIk0JnmhJw&list=PLQHOyNho0DjKjZG6eT7YEsZrFVyAIS_nQ",
    service: "YouTube"
  },
  {
    id: 118,
    title: "MADiSON",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://pic.rutubelist.ru/video/ab/5e/ab5eb3012a75ad798ae4c47d5de034fd.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=4TJrbvTxckI&list=PLQHOyNho0DjJVaqAubBh7ioaVSHqPc5K9",
    service: "YouTube"
  },
  {
    id: 119,
    title: "Hogwarts LEGACY",
    type: "game",
    rating: 3,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=534e3309fec83bb49b9029e1f8aca54e_l-9228595-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=1MlTB0a0KZ4&list=PLQHOyNho0DjIsFyXLQbrGzZHwU7DdJVYc",
    service: "YouTube"
  },
  {
    id: 120,
    title: "Hotline Miami",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://get.wallhere.com/photo/1920x1080-px-Hotline-Miami-Hotline-Miami-2-pink-1346993.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=dzAmBmNuoho&list=PLQHOyNho0DjKM-15WI06sOQqWHw7INJHc",
    service: "YouTube"
  },
  {
    id: 121,
    title: "Atomic Heart",
    type: "game",
    rating: 3,
    duration: "",
    image: "https://gfn.am/en/games/media/images/wide_art_image-atomic-heart-ad72f6af.original.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=3gRJi8awqGo&list=PLQHOyNho0DjJUuNCqXAw3QYwtJYbhJwNw",
    service: "YouTube"
  },
  {
    id: 122,
    title: "Black Mesa",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://images.steamusercontent.com/ugc/17983119669175064212/4F631948D855EFB726C396F69D26453731C85494/",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=u9JABPLKZmo&list=PLQHOyNho0DjKYZNROmzwibwNiBjuLJuDL",
    service: "YouTube"
  },
  {
    id: 123,
    title: "StarCraft II",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=32bdf19c6fba7bbbcbcd09d354b80d56dd656bd2-16478218-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=q0LMRjbRH6A&list=PLQHOyNho0DjJjovI0tZiquQOGM8fPnF5j",
    service: "YouTube"
  },
  {
    id: 124,
    title: "Undertale",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/get-mpic/932277/2a000001954d4ae33a544dffa34fd46b2fb0/orig",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=UbSt7KTaKh0&list=PLQHOyNho0DjISKILsVWK6Fv-xf4vqJy0c",
    service: "YouTube"
  },
  {
    id: 125,
    title: "Cyberpunk 2077",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://cdn.mos.cms.futurecdn.net/9XTE4gQDGx9G7647oeYU2o-1920-80.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtu.be/ADhRUw-zoVc?list=PLQHOyNho0DjJC58YsEySPrAhg3BxVclb_",
    service: "YouTube"
  },
  {
    id: 126,
    title: "S.T.A.L.K.E.R.: Anomaly GAMMA",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://cdn.discordapp.com/discovery-splashes/912320241713958912/6ecd93bf121706ca888d344ea144af40.jpg?size=2048",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=GOM5wqAP2-8&list=PLQHOyNho0DjJlUzGJKoaIAU3oeR3ZZk_T",
    service: "YouTube"
  },
  {
    id: 127,
    title: "The Life and Suffering of Sir Brante",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=cc1d3a3196243e0c2ab9d103a4c3a91f_l-8207704-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtu.be/gvZt3qg0qqs?list=PLQHOyNho0DjJLAI1B5hIDxYbWAqiqSVEe",
    service: "YouTube"
  },
  {
    id: 128,
    title: "FlatOut 2",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=4f4ad3f9a52efa73c76b68cb0f883789_l-4120924-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 129,
    title: "Mordhau",
    type: "game",
    rating: 3,
    duration: "",
    image: "https://gfn.am/en/games/media/images/wide_art_image-mordhau-46109847.original.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 130,
    title: "Бесконечное лето",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://images.steamusercontent.com/ugc/992366568853166242/C54DCFB944AC8939A3CD8C58530A2E63E9AB1B3B/",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=uL6tQQaOd40&list=PLQHOyNho0DjKtfBch5noaUAPbN1qIF9kj",
    service: "YouTube"
  },
  {
    id: 131,
    title: "Outer Wilds",
    type: "game",
    rating: 2,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=cb1e94ceb4013af80955001a121af4b4_l-4715391-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 132,
    title: "SOMA",
    type: "game",
    rating: 2,
    duration: "",
    image: "https://store-images.s-microsoft.com/image/apps.59054.65760911830429861.7b27281f-47aa-4d50-936b-ec0d2edf2e0a.a38df78d-981b-42cc-8f04-71c79b6a919f",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtu.be/MXvIQOpHfPg?list=PLQHOyNho0DjKVss4hIFPhoC8bEltPabnQ",
    service: "YouTube"
  },
  {
    id: 133,
    title: "Homeworld: Tactical Fleet Simulator",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=b3a247db3f2c6d0c00c4009d461989217a93f641-9147982-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 134,
    title: "House of the Dying Sun",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=c7dcf9086f3f5e1bf5770d51208be06e_l-9908477-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 135,
    title: "Spooky's Jump Scare Mansion: HD Renovation",
    type: "game",
    rating: 2,
    duration: "",
    image: "https://images.igdb.com/igdb/image/upload/t_1080p/fpj4udzfr4ba68ldzrni.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 136,
    title: "Warhammer 40,000: Space Marine",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://coop-land.ru/uploads/posts/2025-06/1749279410_ss_7b7d8325d148bc217fb90cf4b26242294a24f3b3.1920x1080.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 137,
    title: "Gothic II",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=7cb92b16cc87929d487d1482a076a3c8e5d8d296-10639889-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 138,
    title: "Hotline Miami 2",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://digiseller.mycdn.ink/imgwebp.ashx?idp=6830179&amp;dc=777905373&amp;w=576",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=Nhsb3ZuCY5U&list=PLQHOyNho0DjJoHIxhEeYH7RGC_s3OLGPG",
    service: "YouTube"
  },
  {
    id: 139,
    title: "Shadow Warrior",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=87d613772287046607453f2580149d4d_l-4944831-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 140,
    title: "Lobotomy Corporation",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://i.warosu.org/data/vt/img/0636/34/1701375458768401.png",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 141,
    title: "Kingdom Come: Deliverance",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=f9de63d0ea372424e2e0b599c29f459a_l-10932557-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/watch?v=PrbxcJ8WTXc&list=PLQHOyNho0DjImDf5ghhfOKkIv_jCFvZaD",
    service: "YouTube"
  },
  {
    id: 142,
    title: "Neon White",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=1a811cca35318fd90bf3a94829b9827a_l-4079353-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы",
    isDrop: true
  },
  {
    id: 143,
    title: "Death Stranding",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://i.playground.ru/e/lIZpnzJJ3zTmoeK2fIV9jg.png",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 144,
    title: "Disco Elysium",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://iwant.games/wp-content/uploads/disco-elysium-cover-1.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/playlist?list=PLQHOyNho0DjKkDEQnHHA0w__SdEeexHqf",
    service: "YouTube"
  },
  {
    id: 145,
    title: "XCOM 2",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=3240d650563ac219041c4db20807bd00_l-5221287-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://www.youtube.com/playlist?list=PLQHOyNho0DjIQLaDq5CPqGj_6ZK5UW--K",
    service: "YouTube"
  },
  {
    id: 146,
    title: "World in Conflict",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=c95c17a438054b6bcc2cdf6a9e265869_l-5275190-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjLEHzT6nVVmNWJ0RelAyHkg&si=YeRJ6TR5o2CrlIgw",
    service: "YouTube"
  },
  {
    id: 147,
    title: "Альтушка для скуфа",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=b795aff6b337e09eb12e9c356dc705de_l-4078555-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtu.be/Ovw2ULOXp70?si=Q1sXC7ClNwMbyVCk",
    service: "YouTube"
  },
  {
    id: 148,
    title: "INDIKA",
    type: "game",
    rating: 2,
    duration: "",
    image: "https://storage.yandexcloud.net/s3-metaratings-storage/images/ea/d0/ead02e5be9615c16348965559f8a2bc8.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtu.be/SoY2aPThiN0?si=7iYlqT92r48O-q35",
    service: "YouTube"
  },
  {
    id: 149,
    title: "Metro 2033",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://pic.rutubelist.ru/video/2025-02-08/ba/08/ba08fa563ab8146a52a053a2d69b8ebb.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjK6PE3k08WiYaK-oQAnJS2J&si=BnT7cucVdaW1OHD4",
    service: "YouTube"
  },
  {
    id: 150,
    title: "Fallout 4",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=b218a1de3a8a3932901749443a752704_l-5147471-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjIPRTGt067TeYzHyiEkY7jr&si=xAl54ImmZ4rh8ZDf",
    service: "YouTube"
  },
  {
    id: 151,
    title: "Metro: Last light",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://pic.rutubelist.ru/video/2f/ee/2fee5efc57b7d7bc0c981884302166ca.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjLBTl2FjnqRDyjfq6zhMrgv&si=_h7JCPx1RTMHaFlm",
    service: "YouTube"
  },
  {
    id: 152,
    title: "Doki Doki Literature Club!",
    type: "game",
    rating: 1,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=4c74adc8c022fc49ddc80a5cebe45831_l-5350403-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 153,
    title: "Dead Space Remastered",
    type: "game",
    rating: 4,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=d40da7c959370189a5f9f1987bdfc886_l-8878159-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjIxlV42ldBVFiYXFn-hs7q-&si=ukLMr1uz65eLCTWx",
    service: "YouTube"
  },
  {
    id: 154,
    title: "Metro Exodus",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://i.pinimg.com/originals/9e/6e/14/9e6e14f5163cfa1e22be35d2affa3ccb.jpg",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "https://youtube.com/playlist?list=PLQHOyNho0DjKoLa2FenUoxu7HelDbhijA&si=JPUm98zu3PZBZk90",
    service: "YouTube"
  },
  {
    id: 155,
    title: "Spec Ops: the line",
    type: "game",
    rating: 5,
    duration: "",
    image: "https://avatars.mds.yandex.net/i?id=02550ea655e8d209d8181d2635868c84_l-8975349-images-thumbs&n=13",
    review: "Отзыв был утерян в прошлом...",
    watchUrl: "#",
    service: "увы"
  },
  {
    id: 156,
    title: "Devil May Cry",
    type: "anime",
    rating: 5,
    duration: "3ч 53м",
    image: "https://m.media-amazon.com/images/S/pv-target-images/e90119e044a451a28a14d4ced033fa6a447d5c104e8dde6ba3e578a5e308396a.jpg",
    review: "Годно, 9/10, сюжета бы побольше",
    watchUrl: "https://boosty.to/mooniverse/posts/0063b045-c5e8-40c0-995b-b3dbcddb7b5b",
    service: "Boosty"
  },
  {
    id: 157,
    title: "Sicario (Убийца)",
    type: "movie",
    rating: 5,
    duration: "2ч 1м",
    image: "https://cdn.splay.uz/media/contents_meta/ubijtsa2015/images/bg_image.jpg",
    review: "Шикарный фильм, от лучшего режиссёра Дениса Вильнёва!",
    watchUrl: "https://boosty.to/mooniverse/posts/ea5d8eda-dfd2-421c-a04d-6851dd844896",
    service: "Boosty"
  },
  {
    id: 158,
    title: "Такси",
    type: "movie",
    rating: 5,
    duration: "1ч 29м",
    image: "https://static.okko.tv/images/v4/5cc2ff32-8001-4e3d-bec5-2ec0348a7d3a?presetId=4000&amp;width=1200&amp;height=630&amp;scale=1&amp;quality=80",
    review: "Отзыв утерян в настоящем...",
    watchUrl: "Увы",
    service: "Boosty"
  },
  {
    id: 159,
    title: "Реквием по мечте",
    type: "movie",
    rating: 5,
    duration: "1ч 41м",
    image: "https://static.okko.tv/images/v4/f9b03662-037e-4c97-8c6e-75d5d4dd0361",
    review: "Отзыв утерян в настоящем...",
    watchUrl: "#",
    service: "Увы"
  }
];

const typeMap = {
  movie: { label: "Фильм", emoji: "🎬", color: "#f15f2c" },
  anime: { label: "Аниме", emoji: "🌸", color: "#c026d3" },
  game: { label: "Игра", emoji: "🎮", color: "#10b981" },
  serial: { label: "Сериал", emoji: "🎥", color: "#103db9" }
};

let currentMinRating = 0;
let searchTerm = "";

function updateSortVisibility() {
  const sortSelect = document.getElementById('sort-select');
  if (!sortSelect) return;
  sortSelect.style.display = currentMinRating === 0 ? '' : 'none';
}

function updateHeaderOffsetVar() {
  const header = document.querySelector('.header');
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  // небольшой зазор, чтобы sidebar не прилипал вплотную к хедеру
  document.documentElement.style.setProperty('--header-offset', `${headerHeight + 16}px`);
}

function updateSidebarRounded() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('sidebar--rounded', window.scrollY > 100);
}

// Генерация звёзд
function getStarHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'star-filled' : 'star-empty'}">★</span>`;
  }
  return html;
}

function getDropBadgeHTML(item) {
  if (!item.isDrop) return '';
  return `
    <div class="drop-badge">
      <span class="drop-badge-icon">✕</span>
      <span>Дроп</span>
    </div>
  `;
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
                        <div class="badge-row">
                          <div class="type-badge" style="background-color: ${type.color}20; color: ${type.color}">
                              ${type.emoji} ${type.label}
                          </div>
                          ${getDropBadgeHTML(item)}
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
  const detailDropBadge = document.getElementById('detail-drop-badge');
  if (detailDropBadge) {
    detailDropBadge.classList.toggle('hidden', !item.isDrop);
  }

  // Кнопка смотреть
  const watchBtn = document.getElementById('detail-watch-link');
  watchBtn.href = item.watchUrl;

  if (item.service === "увы") {
    watchBtn.textContent = "Записи нет";
  } else {
    watchBtn.textContent = `Смотреть на ${item.service}`;
  }

  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');

  // прокрутка так, чтобы кнопка "Вернуться к списку" была сразу видна
  if (window.innerWidth >= 768) {
    // десктоп — просто к началу страницы
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // мобильная версия — прокручиваем к кнопке с учётом sticky-header
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
      const header = document.querySelector('.header');
      const headerOffset = header ? header.getBoundingClientRect().height : 0;
      const btnTop = backBtn.getBoundingClientRect().top + window.pageYOffset;
      const targetTop = Math.max(0, btnTop - headerOffset - 12);
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  }
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

  window.addEventListener('resize', updateHeaderOffsetVar, { passive: true });

  let sidebarTicking = false;
  window.addEventListener('scroll', () => {
    if (sidebarTicking) return;
    sidebarTicking = true;
    window.requestAnimationFrame(() => {
      updateSidebarRounded();
      sidebarTicking = false;
    });
  }, { passive: true });

  updateHeaderOffsetVar();
  updateSortVisibility();
  updateSidebarRounded();
  renderCards();
}

// Запуск
window.onload = init;
