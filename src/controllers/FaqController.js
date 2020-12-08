const Post = require('../models/Post');

module.exports = {
  async create(request, response){
    const {answer, question} = request.body;
    try{
      const post = await Post.create({
        answer: answer,
        question: question
      });

      return response.status(201).json(post);
    }catch(err){
      return response.status(400).send({msg: 'Erro create post'});
    }
  },
}