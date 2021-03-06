/*
Place domains that we allow to redirect to
Make sure that all domains end with a trailing slash. Otherwise, people can do things like this:
https://reddit.com.myevildomain.com
If you want to add sites to this list for all, send a pull request.
Icons are from https://simpleicons.org/
The name and icon are for a GUI client to know what to display, the domains are used for validation
and verification.
*/

interface Site {
  name: string,
  icon: string,
  domains: string[]
}

const allowList: Site[] = [
  {
    name: 'Reddit',
    icon: './icons/reddit.svg',
    domains: [
      'https://reddit.com/',
      'https://old.reddit.com/',
      'https://redd.it/',
      'https://i.reddit.com/', // To the one person who still uses this thing
      // Enable this at your own risk, it may link straight to a NSFW image!
      // 'https://i.redd.it/',
    ],
  },

  {
    name: 'Twitter',
    icon: './icons/twitter.svg',
    domains: [
      'https://twitter.com/',
      'https://mobile.twitter.com/',
      // Enable these at your own risk, it may link straight to a NSFW image!
      // 'https://pbs.twimg.com/',
      // 'https://abs.twimg.com/',
      // 'https://twimg.com/',
    ],
  },

  {
    name: 'Imgur',
    icon: './icons/imgur.svg',
    domains: [
      'https://imgur.com/',
      // Enable this at your own risk, it may link straight to a NSFW image!
      // 'https://i.imgur.com/',
    ],
  },

  {
    name: 'YouTube',
    icon: './icons/youtube.svg',
    domains: [
      'https://youtube.com/',
      'https://youtu.be/',
    ],
  },

  {
    name: 'GitHub',
    icon: './icons/github.svg',
    domains: [
      'https://github.com/',
    ],
  },

  {
    name: 'StackOverflow',
    icon: './icons/stackoverflow.svg',
    domains: [
      'https://stackoverflow.com/',
    ],
  },

  {
    name: 'GitLab',
    icon: './icons/gitlab.svg',
    domains: [
      'https://gitlab.com/',
    ],
  },

  {
    name: 'Development resources',
    icon: './icons/code.svg',
    domains: [
      'https://teamtreehouse.com/',
      'https://khanacademy.org/',
      'https://edx.org/',
      'https://codewars.com/',
      'https://freecodecamp.org/',
      'https://theodinproject.com/',
      'https://davidwalsh.name/',
      'https://tutsplus.com/',
      'https://codecademy.com/',
    ],
  },

  // Various Linux-related things
  {
    name: 'Linux related',
    icon: './icons/linux.svg',
    domains: [
      'https://linux.org/',
      'https://kernel.org/',
      'https://ubuntu.com/',
      'https://wiki.ubuntu.com/',
      'https://help.ubuntu.com/',
      'https://launchpad.net/',
      'https://code.launchpad.net/',
      'https://debian.org/',
      'https://wiki.debian.org/',
      'https://getfedora.org/',
      'https://fedoraproject.org/wiki/Fedora_Project_Wiki/',
      'https://docs.fedoraproject.org/',
      'https://ask.fedoraproject.org/',
      'https://discussion.fedoraproject.org/',
      'https://archlinux.org/',
      'https://wiki.archlinux.org/',
      'https://bbs.archlinux.org/',
      'https://bugs.archlinux.org/',
      'https://security.archlinux.org/',
      'https://aur.archlinux.org/',
    ],
  },
];

function getDomains() {
  const domains: string[] = [];
  allowList.forEach((site) => {
    site.domains.forEach((domain) => {
      domains.push(domain);
    });
  });
  return domains;
}

export const domains = getDomains();
export default allowList;
