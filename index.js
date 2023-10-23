const express = require('express');
const server = express();
const port = process.env.PORT || 8000;


server.get('/', (req, res) =>
  res.send(
    `<p>server is listening on port ${port}</p>`
  )
);


server
.route('/')
.get()


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