import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'magentaTheme',
    themes: {
      magentaTheme: {
        dark: false,
        colors: {
          primary: '#E20074',     // magenta
          secondary: '#3A3A3A',
          background: '#F5F5F5'
        }
      }
    }
  }
})