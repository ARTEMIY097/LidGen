IMAGE_NAME := lidgen-frontend-image
CONTAINER_NAME := lidgen-frontend-container
PORT := 5173

.PHONY: default

default: info build run logs

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run --name $(CONTAINER_NAME) -p $(PORT):5173 -d $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

logs:
	docker logs -f $(CONTAINER_NAME)

clean:
	docker image prune -f
	docker rmi $(IMAGE_NAME)

info:
	@echo "====="===== IF THERE IS ERROR - TRY 'make stop' 'make stop' ==========""
