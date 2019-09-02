# Back-end candidate test

## How to start project

### Required dependencies

- Docker (https://docs.docker.com/install/)
- AWS SAM CLI (https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) - no AWS sign in needed here
- make (https://www.gnu.org/software/make/manual/html_node/Introduction.html)

By running `make` in the project root folder, following services are starting:

- front-end server
- back-end graphql server
- minio storage container
- aws lambda function as API.

## How to test project

Front-end is started on port `8080`. You can go to [localhost:8080](http://localhost:8080) to open the webpage.

Back-end is started on port `3010`. You can go to [localhost:3010/graphql](http://localhost:3010/graphql) to open graphql playground.

Minio storage is hosted on port `9000`. You ca go to [localhost:9000](http://localhost:9000) to see the files storage and check the files after saving.

- Access key is `minio`
- Secret Key is `minio-storage`
  
AWS lambda function is started locally as API on port `3000`. You can try it out by running

```bash
curl \
  http://localhost:3000/save \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "data": "Hello World!" }'
```
