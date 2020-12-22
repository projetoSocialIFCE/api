const Post = require('../models/Post');

module.exports = {
  async create(request, response){
    try{
      const {location: img_url = ''} = request.file;
      const {title} = request.body;

      const post = await Post.create({
        img_url,
       title,
       
      
      });

      return response.status(200).json(post);
    }catch(err){
      return response.status(400).send({msg: 'Error creating new post'});
    }
  },

  async index (request, response){
    try{
      const posts =  await Post.find();
     
      return response.json(posts);
    }catch(err){
      console.log(err)
      return response.status(400).send({error: 'Error loading Posts.'})
    }
  },
  async deleteById (request, response){
    const {id} = request.params;
    try{
      const post = await Post.findById(id);
      await post.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting post.'})
    }
  },
}