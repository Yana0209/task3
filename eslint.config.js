import js from '@eslint/js';
import globals from 'globals';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser, 
			parserOptions: {
				project: ['tsconfig.json'], 
			},
		},
		files: ['**/*.{js,ts}'],
		plugins: {
			prettier,
			'typescript-eslint': plugin,
		},
		rules: {
			'prettier/prettier': 'error',
			'no-console': ['error', { allow: ['error', 'warn'] }], 
			'prefer-const': 'warn', 
			'no-unused-vars': 'warn', 
		},
	},
];
