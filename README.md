# Cogear.JS plugin **youtube**

Transforms links like `!https://www.youtube.com/watch?v=xxxxxxxxxx` to embed video players (iframe).

> Pay attention that `!` prefix before link scheme is necessary.

# Requirements

Works with **Cogear.JS** v1.0.12 or higher.

# Installation

Go to the site folder and install plugin with command:
```bash
yarn add cogear-plugin-youtube
# or 
npm install cogear-plugin-youtube
```

Plugin will loads up automatically.

# Usage

Embed width and height can be defined in site config `./config.yaml`:
```yaml
youtube:
	width: 640
	height: 320
```

# Docs

More info: [https://cogearjs.org/docs/plugins](https://cogearjs.org/docs/plugins).