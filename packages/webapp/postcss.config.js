// module.exports = {
//   plugins: [
//     require('cssnano')({
//       preset: 'default',
//     }),
//     require('tailwindcss'),
//     require('autoprefixer'),
//   ],
// };
//

module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
};
