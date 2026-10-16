import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const canonicalUrl = process.env.READTHEDOCS_CANONICAL_URL;

export default defineConfig({
  // Read the Docs exposes every build below /<language>/<version>/.
  site: canonicalUrl || 'http://localhost:4321',
  base: canonicalUrl ? new URL(canonicalUrl).pathname : '/',
  integrations: [
    starlight({
      title: 'ES IODE Documentation',
      logo: {
        src: './src/assets/horizontal-nobackground-es-iode-logo-158x41-v5.png',
        replacesTitle: true,
      },
      favicon: '/assets/IodeIconv532-round.png',
      customCss: ['./src/styles/esiode.css'],
      components: {
        SocialIcons: './src/components/SocialIcons.astro',
      },
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        de: { label: 'Deutsch', lang: 'de' },
        nl: { label: 'Nederlands', lang: 'nl' },
        es: { label: 'Español', lang: 'es' },
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/showcase/es-iode' },
        { icon: 'external', label: 'Site ES IODE', href: 'https://iode.ethicseido.com/' },
      ],
    }),
  ],
});
