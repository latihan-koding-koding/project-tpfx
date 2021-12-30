module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './src/pages/*.{js,ts,jsx,tsx}',
              './src/components/**/*.{js,ts,jsx,tsx}',
              './src/layouts/*.{js,ts,jsx,tsx}'
            ],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        ]
      : undefined,
    'postcss-preset-env'
  ]
};
