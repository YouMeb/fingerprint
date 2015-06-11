BIN := ./node_modules/.bin
DUO := $(BIN)/duo

SRC = $(shell find lib/ -type f -name '*.js')

build: build/index.js

build/index.js: $(SRC)
	@$(DUO) --standalone=fingerprint index.js

clean:
	@-rm -rf build components
