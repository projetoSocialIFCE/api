const Post = require('../models/Post');

module.exports = {
  async create(request, response){
    const {title, body, img_url} = request.body;
    try{
      const post = await Post.create({
       title: title,
       body: body,
       img_url: img_url
      });

      return response.status(200).json(post);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
}