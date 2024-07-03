export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  availableLocales: ["en", "it"],
  messages: {
    en: {
      welcome: "Welcome",
    },
    it: {
      welcome: "Bienvenue",
    },
  },
}));
