const User = require('../models/User')

module.exports = {
  async create(request, response){
    const {name} = request.body;
    try{
      const user = await User.create({
        name: name,
      });

      return response.status(200).json(user);
    }catch(err){
      return response.status(400).send({msg: 'Erro create user'});
    }
   
  }
}