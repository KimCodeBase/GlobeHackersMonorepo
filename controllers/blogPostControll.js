const dbPool = require('../db/pgClient');

const getAllPosts = async (req, res) => {
    try {
      const { rows } = await dbPool.query(
        'SELECT * FROM blogPost;'
      );
      res.send(rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  };


  module.exports = {
    getAllPosts
  }