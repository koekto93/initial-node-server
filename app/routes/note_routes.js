var ObjectID = require('mongodb').ObjectID; //MongoDB требуется ID не в виде строки, а в виде специального объекта
module.exports = function(app, db) {
  //запрос на получение заметки по id
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });
  //запрос на удаление заметки
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });
  //запрос на создание заметки
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  //запрос на модификацию заметки
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title }; //если данных не будет, то они все равно перезатрут старые данные
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(note);
      }
    });
  });
};
