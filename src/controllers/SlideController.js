const Post = require('../models/Post');

module.exports = {
  async create(request, response){
    const {img_url} = request.body;
    try{
      const post = await Post.create({
        img_url: img_url,
      });

      return response.status(201).json(post);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
}