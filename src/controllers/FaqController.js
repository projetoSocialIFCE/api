const Faq = require('../models/Faq');

module.exports = {
  async create(request, response){
    const {answer, question} = request.body;
    try{
      const faq = await Faq.create({
        answer: answer,
        question: question
      });

      return response.status(201).json(faq);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
  async index (request, response){
    try{
      const faqs =  await Faq.find();
     
      return response.json(faqs);
    }catch(err){
      return response.status(400).send({error: 'Error loading Posts.'})
    }
  },

  async deleteById (request, response){
    const {id} = request.params;
    try{
      const faq = await Faq.findById(id);
      await faq.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting faq.'})
    }
  },
}