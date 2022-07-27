build:
	docker compose build
	docker compose run --rm front npm install

rebuild:
	docker compose build --no-cache
	docker compose run --rm front npm install

up:
	docker compose up -d

down:
	docker compose down