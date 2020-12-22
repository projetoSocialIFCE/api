const PostParceiro = require('../models/PostParceiro');

module.exports = {
  async create(request, response){
    try{
      const {location: img_url = ''} = request.file;
      const {title} = request.body;

      const postParceiro = await PostParceiro.create({
        img_url,
       title,
       
      
      });

      return response.status(200).json(postParceiro);
    }catch(err){
      return response.status(400).send({msg: 'Error creating new postParceiro'});
    }
  },

  async index (request, response){
    try{
      const postParceiros =  await PostParceiro.find();
     
      return response.json(postParceiros);
    }catch(err){
      console.log(err)
      return response.status(400).send({error: 'Error loading PostParceiros.'})
    }
  },
  async deleteById (request, response){
    const {id} = request.params;
    try{
      const postParceiro = await PostParceiro.findById(id);
      await postParceiro.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting postParceiro.'})
    }
  },
}