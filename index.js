const express = require('express')
const app = express()


var clientConfig = {
    bucketUri: 's3://aws-athena-query-results-139643316571-us-east-1'
}

var awsConfig = {
    region: 'us-east-1',
    accessKeyId: process.env.AIAACCESSKEY,
    secretAccessKey: process.env.SECRETKEY
}

var athena = require("athena-client")
var client = athena.createClient(clientConfig, awsConfig)


app.get('/', (req, res) => {
  console.log("Access / " + " Query : " + req.headers.query)
  let query = req.headers.query;
  client.execute(query, function(err, data) {
      if (err) {
          return(err)
      }
      res.json(data)
  })
})

app.listen(3300, () => console.log('Example app listening on port 3300!'))
