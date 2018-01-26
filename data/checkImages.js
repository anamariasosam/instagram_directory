const request = require('request')
const db = require('../db/db')
const url = require('openurl')

const Business = require('../api/models/business')

db.then(() => {
  Business.find((err, businesses) => {
    businesses.map((business, index) => {
      request(business.image, (error, response, body) => {
        if (response.statusCode == 404) {
          findStore(business._id)
        }
      })
    })
  })
})

function findStore(id) {
  Business.findById(id, 'name', (err, business) => {
    url.open(`https://instagram.com/${business.name}`)
  })
}

// request('https://www.instagram.com/afrosouloficial/',
//   (error, data, body) => {
//     var path = "/Users/anasosa/Desktop/index.html";
//
//     fs.writeFile(path,data, function(error) {
//       if (error) {
//         console.error("write error:  " + error.message);
//       } else {
//         console.log("Successful Write to " + path);
//       }
//     });
//   }
// )
