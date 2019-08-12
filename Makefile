## Macros
ESLIB := template

CIBUILDER := node build_node/tools/ciBuilder.js


## Dev Tasks

run: buildTestBundle
	$(CIBUILDER)

preRelease: buildTestBundle
	PRERELEASE=true $(CIBUILDER)

releaseSetup: buildTestBundle
	RELEASE_SETUP=true $(CIBUILDER)


## Tests

testAll: run

testNode: buildNode
	SKIP_KARMA=true $(CIBUILDER)

testBrowser: buildTestBundle
	karma start --single-run --browsers ChromeHeadless build_node/tools/karma.conf.js

testDev: buildNode
	TEST_DEV=true webpack --config build_node/tools/karma.webpack.config.js -w;

testStart:
	TEST_DEV=true karma start build_node/tools/karma.conf.js


## Dependencies

buildNode: cleanNode
	ioffice-tsc -DtsconfigPath=./tsconfig.node.json

buildBrowser: cleanBrowser
	ioffice-tsc -DtsconfigPath=./tsconfig.browser.json

buildTestBundle: buildNode buildBrowser
	webpack --config build_node/tools/webpack.config.js;

cleanNode:
	rm -rf build_node

cleanBrowser:
	rm -rf build_browser

FORCE:
