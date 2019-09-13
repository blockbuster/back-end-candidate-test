require('reflect-metadata')
const { AppModule } = require('./modules/app.module')
const express = require('express')
const graphQLHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('*', (req, res, next) => {
    console.log(req.body)
    next()
})

app.use('/graphql', graphQLHTTP({
    schema: AppModule.schema,
    graphiql: true,
}))

app.listen(process.env.PORT)
