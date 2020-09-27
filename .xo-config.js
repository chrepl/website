module.exports = {
    extends: ['xo-react/space', 'plugin:jest/recommended'],
    prettier: true,
    rules: {
        'import/no-anonymous-default-export': 'off'
    },
    overrides: [
        {
            files: ['**.tsx'],
            rules: {
                'react/prop-types': 'off',
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            kebabCase: true,
                            pascalCase: true
                        }
                    }
                ]
            }
        },
        {
            files: ['**.tsx', '**.ts'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'warn'
            }
        }
    ]
}
