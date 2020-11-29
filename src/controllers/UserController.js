const User = require('../models/User');


module.exports = {
  async create(request, response){
    //coloque os parametros recebidos no corpo da requisição
    const {name} = request.body;
    try{
      const user = await User.create({
        name: name,
      });

      return response.status(200).json(user);
    }catch(err){
      return response.status(400).send({msg: 'Erro create user'});
    }
  },

  async deleteById (request, response){
    const {id} = request.params;
    try{
      const user = await User.findById(id);
      await user.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting User.'})
    }
  },

  async updateById (request, response){
    //id recebido como parametro
    const {id} = request.params;
    //coloque os parametros recebidos no corpo da requisição
    const {name} = request.body;

    try{
      const user  = await User.findByIdAndUpdate(id, {
        name: name,
      });
      return response.status(204).send();
    }catch(e){
      return response.status(400).json({error: 'No User found with this ID'});
    }
  },

  async listUsers (request, response){
    try{
      const users = await User.find();

      return response.status(200).json(users);
    }catch(err){
       return response.status(400).json({error: 'Users not found.'});
    }
  }
}