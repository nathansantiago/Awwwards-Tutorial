// For Tailwind CSS v4
import postcssPlugin from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssPlugin(),
    autoprefixer(),
  ]
}