.PHONY: build test publish clean help

## build: Build the project with bun
build:
	bun run build

## test: Run the tests with bun
test:
	bun test

## clean: Clean the dist and node_modules directories
clean:
	rm -rf dist
	rm -rf node_modules

## install: Install the dependencies with bun
install:
	bun install

## publish: Publish the package to npm
publish: clean install test build
	npm publish

## help: Show a list of commands
help : Makefile
	@echo "Usage:"
	@echo "  make [command]"
	@echo ""
	@echo "Commands:"
	@sed -n 's/^##//p' $< | awk 'BEGIN {FS = ": "}; {printf "\033[36m%-40s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := build 