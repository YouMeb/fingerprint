BIN := ./node_modules/.bin
DUO := $(BIN)/duo

SRC = $(shell find lib/ -type f -name '*.js')

build: build/index.js

build/index.js: node_modules $(SRC)
	@$(DUO) --standalone=fingerprint index.js

node_modules:
	@npm i

clean:
	@-rm -rf build components
