import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Poe Extension",
  version: "1.0.0",
  author: "Elvin Chu",
  icons: {},
  action: {
    default_popup: "src/popup/index.html",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      js: ["src/content-script/index.tsx"],
      matches: ["https://poe.com/*"],
    },
  ],
  web_accessible_resources: [
    {
      matches: ["https://poe.com/*"],
      resources: ["assets/*"],
    },
  ],
  permissions: ["declarativeNetRequest", "storage", "webRequest"],
  host_permissions: ["https://poe.com/*"],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), crx({ manifest })],
});
