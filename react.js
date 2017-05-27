module.exports = {
  plugins: [
    'react'
  ],
  ecmaFeatures: {
    jsx: true
  },

  rules: {
    // JSX //
    //-----//
    'jsx-quotes': [2, 'prefer-double'],

    // React //
    //-------//
    'react/display-name': [2, { ignoreTranspilerName: false }],
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, {location: 'tag-aligned'}],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 2
  }
};
