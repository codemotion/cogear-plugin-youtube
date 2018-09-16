#  📺`YouTube` plugin for Cogear.JS 

Transforms links like `!https://www.youtube.com/watch?v=xxxxxxxxxx` to embed video players (iframe).

> Pay attention that `!` prefix before link scheme is required.

# Requirements

Works with **Cogear.JS** v1.0.13 or higher.

# Installation

Go to the site folder and install plugin with command:
```bash
yarn add cogear-plugin-youtube
# or 
npm install cogear-plugin-youtube
```

Plugin will loads up automatically.

# Usage

To avoid YouTube embed loads on startup plugin render only thumb with icon.

On click it's been replaced with embed.

Plugin script and styles automatically injected in all entries.

To override it set in `./config.yaml`:
``` yaml
youtube:
  inject: false
```

And then you can process it manually as you want.

See `./youtube.js` entry point to understand how.

# Docs

More info: [https://cogearjs.org/docs/plugins](https://cogearjs.org/docs/plugins).
