start-services:
	docker-compose build && docker-compose up -d && \
	cd ./serverless && sam local start-api

