module.exports = {
    extends: ['xo-react/space', 'plugin:jest/recommended'],
    prettier: true,
    rules: {
        'import/no-anonymous-default-export': 'off',
        'jest/no-large-snapshots': ['warn', { maxSize: 20, inlineMaxSize: 8 }]
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
                '@typescript-eslint/no-unused-vars': 'warn',
                'import/no-unassigned-import': 'off'
            }
        }
    ]
}
