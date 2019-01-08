### Описание

Сий проект - это маленькая реализация сервера на node.js для работы с заметками
Реализованно create, delete, update, get

### Запуск

```js
yarn dev
```

### Требования

- Созданный аккаунт и база данных на [сайте](https://mlab.com/home)
- Создать в корне папку config -> db.js с кодом:

```js
module.exports = {
  url: 'mongodb://user:password@ds251804.mlab.com:51804/notesdb',
};
```

#### [Мануал из habr](https://habr.com/company/ruvds/blog/321104/)
