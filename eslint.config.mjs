import prettier from 'eslint-config-prettier'
import functional from 'eslint-plugin-functional'
import neostandard from 'neostandard'
import { parser } from 'typescript-eslint'

const standard = neostandard({
  ignores: neostandard.resolveIgnoresFromGitignore(),
  noStyle: true,
  ts: true
})

export default [
  ...standard,
  functional.configs.externalTypeScriptRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  prettier,
  {
    rules: {
      '@stylistic/comma-dangle': 'off',
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'off',
      'functional/no-expression-statements': 'off',
      'functional/no-return-void': 'off'
    }
  },
  {
    files: ['**/*.{js,cjs,mjs,ts}'],
    languageOptions: {
      parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    files: ['*.{js,cjs,mjs,ts}', 'src/**/*.{js,cjs,mjs,ts}'],
    rules: {
      'functional/no-expression-statements': 'error',
      'functional/no-return-void': 'error',
      'functional/no-throw-statements': [
        'error',
        { allowToRejectPromises: true }
      ]
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@stylistic/indent': 'off',
      'functional/no-mixed-types': 'off'
    }
  }
]
