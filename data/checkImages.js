var request = require('request')
const db = require('../db/db')

const Business = require('../api/models/business')

function imageUrlExist(url) {
  return request(url, function(error, response, body) {
    if (response.statusCode === 404) {
      return true
    }
  })
}

db.then(() => {
  Business.find(function(err, business) {
    for (var i = 0; i < business.length; i++) {
      var image = business[i].image
      var id = business[i]._id

      console.log(imageUrlExist(image))
    }
  })
})
