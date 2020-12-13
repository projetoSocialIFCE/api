const PostInstagram = require('../models/PostInstagram');

module.exports = {
  async create(request, response){
    const {link} = request.body;
    try{
      const postInstagram = await PostInstagram.create({
        link: link,
      });

      return response.status(201).json(postInstagram);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
  async index (request, response){
    try{
      const postInstagram =  await PostInstagram.find();
     
      return response.json(postInstagram);
    }catch(err){
      return response.status(400).send({error: 'Error loading Posts.'})
    }
  },
  async deleteById (request, response){
    const {id} = request.params;
    try{
      const postInstagram = await PostInstagram.findById(id);
      await postInstagram.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting postInstagram.'})
    }
  },
}