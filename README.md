# bait
A URL shortner with custom social embeds

## This is nowhere near complete yet

If you want to add more sites, they must:
- Be SFW, or show a NSFW clickthrough (eg Reddit, Imgur)
- Serve content over https://

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
