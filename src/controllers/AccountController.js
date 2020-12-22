const Account = require('../models/Account');

module.exports = {
  async create(request, response){
    const {bank, account, agencia, value} = request.body;
    try{
      const accountNew = await Account.create({
        bank: bank,
        account: account,
        agencia: agencia,
        value: value
      });

      return response.status(201).json(accountNew);
    }catch(err){
      return response.status(400).send({msg: 'Erro create account'});
    }
  },
  async index (request, response){
    try{
      const accounts =  await Account.find();
     
      return response.json(accounts);
    }catch(err){
      return response.status(400).send({error: 'Error loading Posts.'})
    }
  },

  async deleteById (request, response){
    const {id} = request.params;
    try{
      const account = await Account.findById(id);
      await account.deleteOne();
      
      return response.send();
    }catch(err){
      return response.status(400).send({error: 'Error deleting Account.'})
    }
  },

  async updateAccount (request, response){
    try{
      const {id} = request.params;
      const {value} = request.body;
      const account =  await Account.findById(id);

      const v = account.value + value ;
      account.value = v;

      await Account.findByIdAndUpdate(id, account);
     
      return response.status(201).json(account);
    }catch(err){
      console.log(err)
      return response.status(400).send({error: 'Error loading Post.'})
    }
  },
}