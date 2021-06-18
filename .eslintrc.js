module.exports = {
	"env": {
		"browser": true,
		"commonjs": false
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"parserOptions": {
		"ecmaVersion": 10
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"no-console": "off"
	},
	"globals": {
		"process": true
	}
};
