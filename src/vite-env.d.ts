/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GPT_KEY: string;
    // Інші змінні оточення...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
