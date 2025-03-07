// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    "index",
    {
      type: "category",
      label: "Use Linea",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "use-linea" }],
      collapsible: false,
    },
    {
      type: "category",
      label: "Developers",
      link: {
        type: "generated-index",
      },
      items: [{ type: "autogenerated", dirName: "developers" }],
      collapsible: false,
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "link",
          label: "Block explorer",
          href: "https://explorer.goerli.linea.build/",
        },
        "reference/status",
        "reference/api",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Contact us",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "link",
          label: "Get help",
          href: "https://support.linea.build/",
        },
        {
          type: "link",
          label: "Provide feedback",
          href: "https://community.linea.build/c/feedback",
        },
        {
          type: "link",
          label: "Report an issue",
          href: "https://community.linea.build/c/bug-reports/",
        },
        {
          type: "link",
          label: "Join our Discord",
          href: "https://discord.com/invite/consensys",
        },
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
