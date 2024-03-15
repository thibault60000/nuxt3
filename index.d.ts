declare module "nuxt/schema" {
  interface AppConfigInput {
    /** Theme configuration */
    theme?: {
      /** Dark mode */
      dark?: boolean;
      /** Primary app color */
      primaryColor?: string;
    };
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
