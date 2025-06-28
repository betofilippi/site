module.exports = {
  extends: ["next/core-web-vitals", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["jsx-a11y", "@typescript-eslint"],
  rules: {
    // Accessibility
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/role-has-required-aria-props": "error",

    // TypeScript
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "error",

    // React
    "react/no-unescaped-entities": "off",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

    // Next.js
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "error",
  },
  settings: {
    "jsx-a11y": {
      components: {
        Image: "img",
        Button: "button",
      },
    },
  },
}
