start-services:
	docker-compose build && docker-compose up -d && \
	cd ./lambda && sam local start-api