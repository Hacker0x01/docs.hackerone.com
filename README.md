[![Gatsby Publish](https://github.com/Hacker0x01/docs.hackerone.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/Hacker0x01/docs.hackerone.com/actions/workflows/deploy.yml)

# docs.hackerone.com

This repo contains the source code and documentation powering [docs.hackerone.com](https://docs.hackerone.com/).

## Getting started

### Prerequisites

1. Git
1. Node: install version 16 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A fork of the repo (for any contributions)
1. A clone of the [docs.hackerone.com repo](https://github.com/Hacker0x01/docs.hackerone.com) on your local machine

### Installation

1. `cd docs.hackerone.com` to go into the project root
1. `yarn` to install the website's npm dependencies

### Running locally

1. `yarn develop` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` to open the site in your favorite browser

> On some machines you'll receive an error like:

```
Generating development SSR bundle failed

error:0308010C:digital envelope routines::unsupported
```
> Run the following command to use the legacy OpenSSL provider instead:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

### Deploy

Deploys are automated using GitHub actions. Every commit to the master branch will trigger a script that will build and deploy the site to production. If you want to deploy manually, follow the steps below:

1. `cd docs.hackerone.com` to go into the project root
1. `yarn deploy`
1. wait a minute and open `https://docs.hackerone.com/`

## Contributing

### Guidelines

The documentation is divided into several sections with a different tone and purpose. If you plan to write more than a few sentences, you might find it helpful to get familiar with the [contributing guidelines](https://github.com/Hacker0x01/docs.hackerone.com/blob/master/CONTRIBUTING.md) for the appropriate sections.

### Create a branch

1. `git checkout master` from any folder in your local `docs.hackerone.com` repository
1. `git pull origin master` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change

1. Follow the "Running locally" instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload
  1. Changes to markdown files in `docs` will hot-reload
  1. If working with plugins, you may need to remove the `.cache` directory and restart the server

### Test the change

1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fixed header logo on Android`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [docs.hackerone.com repo](https://github.com/Hacker0x01/docs.hackerone.com), and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes.

## Troubleshooting

- `yarn clean` to clear the local gatsby cache
- `yarn reset` to clear the local node.js cache
