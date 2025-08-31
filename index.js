import eslintjs from "@eslint/js";
import tsEslint from "typescript-eslint";
import stylisticPlugin from '@stylistic/eslint-plugin'
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    },
  },
  eslintjs.configs.recommended,
  tsEslint.configs.eslintRecommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    plugins: {
      "unused-imports": unusedImportsPlugin,
      "@typescript-eslint": tsEslint.plugin,
      "@stylistic": stylisticPlugin,
    },
    rules: {
      // Eslint
      "array-callback-return": "error",
      "block-scoped-var": "error",
      "default-case": ["error"],
      "default-param-last": ["error"],
      "max-classes-per-file": ["off"],
      "no-caller": ["error"],
      "no-constructor-return": ["error"],
      "no-eq-null": ["error"],
      "no-eval": ["error"],
      "no-extend-native": ["error"],
      "no-implicit-globals": ["error"],
      "no-implied-eval": ["error"],
      "no-invalid-this": ["error"],
      "no-iterator": ["error"],
      "no-labels": ["error"],
      "no-lone-blocks": ["error"],
      "no-loop-func": ["error"],
      "no-multi-str": ["error"],
      "no-new-func": ["error"],
      "no-new-wrappers": ["error"],
      "no-octal-escape": ["error"],
      "no-param-reassign": ["error"],
      "no-proto": ["error"],
      "no-return-assign": ["error"],
      "no-return-await": ["error"],
      "no-script-url": ["error"],
      "no-self-compare": ["error"],
      "no-sequences": ["error"],
      "no-throw-literal": ["error"],
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
      }],
      "no-useless-call": ["error"],
      "no-useless-concat": ["error"],
      "no-void": ["error"],
      "prefer-regex-literals": ["error"],
      "radix": ["error"],
      "require-await": ["error"],

      // Unused Imports
      "unused-imports/no-unused-imports": "error",

      // Typescript
      "@typescript-eslint/explicit-member-accessibility": ["error"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: [
            "can",
            "did",
            "does",
            "has",
            "is",
            "must",
            "needs",
            "should",
            "was",
            "will",
          ],
        },
      ],
      "@typescript-eslint/no-extraneous-class": ["error", {
        "allowWithDecorator": true
      }],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        }
      ],
      "@typescript-eslint/strict-boolean-expressions": ["error",
        {
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableEnum: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false,
        }
      ],

      // Stylistic JS
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/comma-spacing": ["error"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/member-delimiter-style": "error",
      "@stylistic/object-property-newline": [
        "error",
        { "allowAllPropertiesOnSameLine": true },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
      ],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/space-before-function-paren": [
        "error",
        { "anonymous": "never", "named": "never", "asyncArrow": "always" },
      ],
      "@stylistic/type-annotation-spacing": "error",
    },
  }
];