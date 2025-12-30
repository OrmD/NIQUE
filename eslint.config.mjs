import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            react: reactPlugin,
            'simple-import-sort': simpleImportSort,
            'react-hooks': reactHooks,
            boundaries,
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: { alwaysTryTypes: true },
            },
            'boundaries/elements': [
                { type: 'core', pattern: 'app/core/**' },
                { type: 'pages', pattern: 'app/pages/**' },
                { type: 'widgets', pattern: 'app/widgets/**' },
                { type: 'features', pattern: 'app/features/**' },
                { type: 'entities', pattern: 'app/entities/**' },
                { type: 'shared', pattern: 'app/shared/**' },
            ],
        },
        rules: {
            // console
            'no-console': 'warn',

            // TypeScript
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',

            // imports sorting
            'simple-import-sort/exports': 'warn',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        ['^react', '^@?\\w'],
                        ['^app/(core|entities|features|widgets|pages|shared)(/.*|$)'],
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        ['^.+\\.module\\.s?css$'],
                        ['^'],
                    ],
                },
            ],

            // React
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/jsx-curly-brace-presence': [
                'warn',
                {
                    props: 'never',
                    children: 'ignore',
                    propElementValues: 'always',
                },
            ],

            // React hooks
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // boundaries: шарова архітектура FSD
            'boundaries/element-types': [
                'error',
                {
                    default: 'allow',
                    rules: [
                        {
                            from: 'shared',
                            disallow: ['entities', 'features', 'widgets', 'pages', 'core'],
                            message: 'Нижчий шар (shared) не може імпортувати вищий (${dependency.type})',
                        },
                        {
                            from: 'entities',
                            disallow: ['features', 'widgets', 'pages', 'core'],
                            message: 'Entities не може імпортувати вищі шари (${dependency.type})',
                        },
                        {
                            from: 'features',
                            disallow: ['widgets', 'pages', 'core'],
                            message: 'Features не може імпортувати вищі шари (${dependency.type})',
                        },
                        {
                            from: 'widgets',
                            disallow: ['pages', 'core'],
                            message: 'Widgets не може імпортувати вищі шари (${dependency.type})',
                        },
                        {
                            from: 'pages',
                            disallow: ['core'],
                            message: 'Pages не може імпортувати Core',
                        },
                    ],
                },
            ],

            'boundaries/entry-point': [
                'error',
                {
                    default: 'disallow',
                    message:
                        'Модуль (${file.type}) має імпортуватися через публічний API: ${dependency.source}',
                    rules: [
                        {
                            target: ['shared'],
                            allow: '**',
                        },
                        {
                            target: ['entities', 'features', 'widgets', 'pages'],
                            allow: ['*/index.ts', '*/index.tsx'],
                        },
                    ],
                },
            ],
        },
    }
];

export default eslintConfig;
