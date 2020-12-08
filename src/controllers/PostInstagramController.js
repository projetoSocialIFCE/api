const Post = require('../models/Post');

module.exports = {
  async create(request, response){
    const {link} = request.body;
    try{
      const post = await Post.create({
        link: link,
      });

      return response.status(201).json(post);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
}