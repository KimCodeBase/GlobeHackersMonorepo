const express = require('express');
const server = express();
const port = process.env.PORT || 8000;
const blogPost = require('./blogPost');

server.use(express.json());
server.get('/', (req, res) =>
  res.send(
    `<p>server is listening on port ${port}</p>`
  )
);


server
.route('/home')
.get((req, res) => {
const { title, date, author, imageUrl, article, dining, adventure, shopping } = req.params;

res.send(`
    ${blogPost.map((index) => `
    <h1>${title}</h1>
    <h3>${date}/${author}</h3>
    <img src="${imageUrl}" />
    <h5>${article}</h5>
    <p>${dining}</p>
    <p>${adventure}</p>
    <p>${shopping}</p>
    `).join('')}
`)
})


server
.route('/Destinations')
.get()

server
.route('/Features')
.get()
.post()

server.
route('/About')
.get()


server.listen(port, () => console.log(`Server up on port ${port}`));