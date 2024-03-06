import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
  presetAttributify,
} from 'unocss'

const colors = {
  primary: '#C68C36',
  hero: '#FFE4BC',
  portfolio: '#F3F2ED',
  footer: '#F3E9C6',
  nav: '#F3F2ED',
}

export default defineConfig({
  theme: {
    colors,
  },
  shortcuts: [
    ['container', 'w-full p-12px mx-auto'],
    ['row', 'flex flex-auto flex-wrap -m-12px'],
    ['col-12', 'col w-full'],
    ['col-6', 'col w-6/12'],
    ['col-4', 'col w-4/12'],
    ['col-3', 'col w-3/12'],
    ['col-2', 'col w-2/12'],
    ['col', 'p-12px'],
    [
      'btn',
      'py-2 px-4 px-6 py-2.5 rounded inline-block cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        brand: [
          { name: 'Playfair Display' },
          {
            name: 'serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
