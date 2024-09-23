module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/support-non-muslim-countries",
        destination: "/applications-for-non-muslim-countries",
        permanent: true,
      },
      {
        source: "/muftimenk-web-demo",
        destination: "https://muftimenk-web-demo.vercel.app",
        permanent: true,
      },
      {
        source: "/abubakarzakaria-web",
        destination: "https://www.abubakarzakaria.com/",
        permanent: true,
      },
      {
        source: "/tafseerulquran-android-app",
        destination: "https://play.google.com/store/apps/details?id=com.deeniinfotech.tafseerulquran",
        permanent: true,
      },
      {
        source: "/dr-abdullah-jahangir-android-app",
        destination: "https://play.google.com/store/apps/details?id=com.deeniinfotech.abdullahjahangir",
        permanent: true,
      },
      {
        source: "/quran-radio-android-app",
        destination: "https://play.google.com/store/apps/details?id=com.deeniinfotech.quran.radio",
        permanent: true,
      },
      {
        source: "/amarzakat-android-app",
        destination: "https://play.google.com/store/apps/details?id=com.taibahacademy.amarzakat",
        permanent: true,
      },
      {
        source: "/p",
        destination: "/applications-for-scholars-and-dawah-organizations",
        permanent: true,
      },
      {
        source: "/p/quranradio",
        destination: "/p/quran-radio",
        permanent: true,
      },
    ];
  },
};
