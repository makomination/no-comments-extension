# No Comments Extension

A Chrome Extension that hides the comment section on YouTube videos, Shorts, and live chat on streams.

## Features

- Hides comment section on regular videos
- Hides comment button and comment panel on Shorts
- Hides live chat on streams and expands video to fill available width
- One-click toggle ON/OFF from popup
- Settings are saved in browser and persist across sessions

## Installation

1. Open `chrome://extensions/` in Chrome
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select this folder

## Usage

1. Comments are automatically hidden when you open YouTube
2. Click the extension icon in the toolbar to open the popup
3. Use the toggle switch to turn comment hiding ON/OFF

## File Structure

```
no-comments-extension/
├── manifest.json      # Extension configuration
├── content.css        # Comment hiding styles
├── content.js         # Settings application script
├── popup.html         # Popup UI
├── popup.js           # Popup logic
├── icons/
│   ├── icon.svg       # Icon source
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## Technical Details

- Manifest V3
- Chrome Storage API for settings persistence
- CSS + JavaScript
