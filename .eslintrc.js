module.exports = {
  overrides: [
    {
      extends: "standard",
      files: ['*.ts', '*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', '@angular-eslint'],
      rules: {
        'quote-props': ['error', 'as-needed'],
        'sort-keys': 'off',
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": 'error',
        "no-useless-constructor": 'off',
        "@typescript-eslint/no-useless-constructor": 'error',
        '@typescript-eslint/array-type': 'off',
        'arrow-parens': 'off',
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'rxjs/Rx',
                message: "Please import directly from 'rxjs' instead",
              },
            ],
          },
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        'max-classes-per-file': 'off',
        'max-len': ['error', { code: 140 }],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'static-field',
              'instance-field',
              'static-method',
              'instance-method',
            ],
          },
        ],
        'no-restricted-syntax': [
          'error',
          {
            selector:
              'CallExpression[callee.object.name="console"][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]',
            message: 'Unexpected property on console object was called',
          },
        ],
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'fah', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: ['fah', 'app'], style: 'kebab-case' },
        ],
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/use-lifecycle-interface': 'warn',
        '@angular-eslint/use-pipe-transform-interface': 'error',
      },
    },
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-a-box': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
      },
    },
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
    {
      files: ['*.spec.ts'],
      env: {
        jasmine: true
      }
    }
  ],
};
