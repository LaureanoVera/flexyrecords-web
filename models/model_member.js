const { Schema, model } = require('mongoose')

const Member = Schema({
  imgUrl: { type: String, require:[true] },
  name: { type: String, require:[true] },
  description: { type: String, require:[false] },
  contact: { type: String, require:[true] },
})

module.exports = model('members', Member)