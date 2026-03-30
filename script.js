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
