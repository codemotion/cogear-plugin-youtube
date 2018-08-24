# Cogear.JS plugin `YouTube` 📺

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

Embed width and height can be defined in site config `./config.yaml`:
```yaml
youtube:
 width: 640
 height: 320
```

Use `fitvids` VanillaJS npm package to fit video into context.

Look at example `app.js`:
```javascript
import fitVids from 'fitvids'
document.addEventListener('DOMContentLoaded',()=>{
	fitVids()
})
```

# Docs

More info: [https://cogearjs.org/docs/plugins](https://cogearjs.org/docs/plugins).
