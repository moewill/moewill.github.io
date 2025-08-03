module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  rules: {
    // Allow custom properties
    'custom-property-pattern': null,
    
    // Allow BEM naming
    'selector-class-pattern': null,
    
    // Allow @apply directive for potential Tailwind integration
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'layer', 'screen']
      }
    ],
    
    // Prefer modern CSS
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,
    
    // Consistency rules
    'color-hex-length': 'short',
    'color-hex-case': 'lower',
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    'function-url-quotes': 'always',
    
    // Performance rules
    'selector-max-id': 0,
    'selector-max-universal': 1,
    'selector-max-type': 2,
    
    // Apple design system specific
    'declaration-property-value-allowed-list': {
      'font-family': ['/^var\\(--font-.+\\)$/', '/^-apple-system/']
    }
  }
};