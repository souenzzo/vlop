#!/usr/bin/env make

all:
	java -jar closure-compiler-v20190618.jar \
	  --language_in=ECMASCRIPT_NEXT \
	  --compilation_level ADVANCED \
	  --entry_point=souenzzo/vlop.js \
	  --js_module_root=src/main \
	  --js=src/main
