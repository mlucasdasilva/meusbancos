name = mariadb-replication
user = teste

# Build Container
build:
	docker-compose build
.PHONY: build

# Publish Container
push:
	docker tag $(IMAGE_NAME)  $(DOCKER_HUB_USER)/$(IMAGE_NAME)
	docker login -u $${DOCKER_HUB_USER} -p $${DOCKER_HUB_PASSWORD} && docker push $(DOCKER_HUB_USER)/$(IMAGE_NAME)
.PHONY: push

# Run Containers
up:
	docker-compose up -d
.PHONY: up

# Down containers
down:
	docker-compose down
.PHONY: down

# Login container
login:
	docker exec -it $$(docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Names}}" | tail -n +2 | sort | fzf | tr -s ' ' | cut -d ' ' -f 4) bash
.PHONY: login

# Logs
logs:
	docker-compose logs -f
.PHONY: logs
