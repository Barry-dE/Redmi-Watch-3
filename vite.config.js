import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
      server: {
            host: true,
      },
      plugins: [react()],
      css: {
            preprocessorOptions: {
                  scss: {
                        additionalData: `
        @import "./src/styles/utils/_mixins.scss";
        @import "./src/styles/utils/_variables.scss";
        @import "./src/styles/shared/description.scss";
        `,
                  },
            },
      },
});
