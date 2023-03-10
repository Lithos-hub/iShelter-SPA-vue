module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:vue/essential', 'standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: { 'vue/no-multiple-template-root': 'off' },
};
