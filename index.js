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

client.execute('select * from parquet.device_data limit 10', function(err, data) {
    if (err) {
        return console.error(err)
    }
    console.log(data)
})
