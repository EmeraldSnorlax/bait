# bait
A URL shortner with custom social embeds

[![forthebadge](https://forthebadge.com/images/badges/built-with-resentment.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)


If you want to add more sites, they must:
- Be SFW, or show a NSFW clickthrough (eg Reddit, Imgur)
- Serve content over https://
- Have an icon from [Simple Icons](https://simpleicons.org/) (for brands) or a [sharp Material Design icon](https://material.io/resources/icons/?style=sharp) (for categories).

Send a pull request editing [this file](https://github.com/EmeraldSnorlax/bait/blob/main/src/allowList.ts). Ensure that it ends with a trailing slash.


Running:
---
```
yarn install
yarn run nodemon
```

Testing:
---
Backend features should be accompanied by a relevant test suite. Ideally, write the test first and then write the code to satisfy the tests after.
```
yarn test
```
