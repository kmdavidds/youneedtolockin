# You Need To Lock In 🔒

**You Need To Lock In** is a minimalist Chrome extension designed to block distractions by replacing the content of specific websites (like YouTube and Instagram) with a motivational message:  
**"YOU NEED TO LOCK IN."**

## 🚀 Features

- Replaces YouTube and Instagram pages with a motivational blocker screen
- Toggle between "on" and "off" modes
- Simple UI with persistent state using Chrome storage
- Slick, responsive button with smooth animations

## 📁 Project Structure

```
├── content.js # Content script that replaces webpage content 
├── index.html # Extension popup HTML 
├── lock.png # Icon used for the extension 
├── manifest.json # Chrome extension manifest (v3) 
├── script.js # Handles toggle logic and storage 
└── style.css # Styling for the popup UI
```

## 🧠 How It Works

1. **Popup Toggle** (`index.html` + `script.js`):  
   A simple interface lets you toggle the extension ON or OFF. The state is stored using `chrome.storage.local`.

2. **Content Script** (`content.js`):  
   On enabled sites (`youtube.com`, `instagram.com`), if the extension is turned ON, it replaces the entire page content with a custom motivational screen.

3. **UI Styling** (`style.css`):  
   Provides a modern, minimal design with a glowing button and ripple effect.

4. **Icon** (`lock.png`):  
   The extension uses a lock icon for branding and visibility.

## ⚙️ Installation

1. Clone or download this repo.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension and click the icon to toggle lock-in mode.

## ✍️ Customization

Want to block more sites?  
Update the `hostnames` array in `content.js`:

```js
let hostnames = ["www.youtube.com", "www.instagram.com", "twitter.com", "netflix.com"];
```

## 📜 License

This project is open-source and available under the MIT License.
