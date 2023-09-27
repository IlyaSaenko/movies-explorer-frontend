* ВАЖНО!
Чтобы посмотреть вёрстку Header для авторизованного пользователя, блок с фильмами и профиль, необходимо в `App.js` на 18 строке установить для `loggedIn` значение `useState(true)`:
`const [loggedIn, setLoggedIn] = useState(false);` -> `const [loggedIn, setLoggedIn] = useState(true);`


* [Ссылка на макет Figma](https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/light-1?type=design&node-id=1-11735&mode=design&t=21aLT7A6vJAjQ7X1-0)