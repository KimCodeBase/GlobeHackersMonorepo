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
    ${blogPost.map(post => `
    <h1>${post.title}</h1>
    <h3>${post.date}/${post.author}</h3>
    <img src="${post.imageUrl}" />
    <h5>${post.article}</h5>
    <p>${post.dining}</p>
    <p>${post.adventure}</p>
    <p>${post.shopping}</p>
    `).join('')}
`)
})


server
.route('/Destinations')
.get((req, res) => {

})

server
.route('/Features')
.get((req, res) => {
    
})
.post((req, res) => {
    
})

server.
route('/About')
.get((req, res) => {
    
})


server.listen(port, () => console.log(`Server up on port ${port}`));