// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "hi future employers and collaborators 👋, please checkout some of my experience!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-other",
          title: "other",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/other/";
          },
        },{id: "news-attended-isls-2023-where-i-presented-my-traveling-bazaar-demo-and-studying-interdisciplinary-collaboration-poster-as-well-as-contributed-to-several-publications",
          title: 'Attended ISLS 2023 where I presented my Traveling Bazaar demo and Studying Interdisciplinary...',
          description: "",
          section: "News",},{id: "news-graduated-with-my-masters-at-cmu-lti-i-will-be-traveling-abroad-in-amsterdam-and-greece-for-the-next-month",
          title: 'Graduated with my masters at CMU LTI. I will be traveling abroad in...',
          description: "",
          section: "News",},{id: "news-started-as-a-research-associate-and-incoming-phd-at-cmu-lti-working-with-prof-carolyn-rosé-and-prof-yonatan-bisk",
          title: 'Started as a Research Associate and incoming PhD at CMU LTI, working with...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/rosievitiello.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%73%61%6E%6E%61.%6D.%76%69%74%69%65%6C%6C%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rosavitiello", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=edYvPK4AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
