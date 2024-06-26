import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://jeissonr115.github.io',
    base: 'galeanoCarBoutique',

    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@components/*": ["./src/components/*"],
            "@layouts/*": ["./src/layouts/*"]
        },
    }
});
