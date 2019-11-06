const User = require("../models/User")
module.exports = {
  async store(req, res) {

    const use = await User.create(req.body)
    return res.json(use)
  },
  async list(req, res) {
    const use = await User.find({})
    return res.json(use)
  },
  async index(req, res) {
    const tutorial = await User.findOne({
      _id: req.params.id
    })
    return res.json(tutorial)
  },
  async update(req, res) {
    const use = await User.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    )
    return res.json(use)
  },
  async destroy(req, res) {
    await User.deleteOne({
      _id: req.params.id
    })
    return res.json({
      message: "Exclusão realizada com sucesso!"
    })
  }
}