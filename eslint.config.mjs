import vitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

export default [
	...vitals,
	...typescript,
	prettier,
	{
		ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
];

