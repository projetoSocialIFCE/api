module.exports = {
  async teste(request, response){
    return response.status(400).send({msg: 'Hello, world!'});
  }
}