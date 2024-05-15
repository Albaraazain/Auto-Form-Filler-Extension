# Auto Form Filler Chrome Extension

## Overview

The Auto Form Filler Chrome Extension automatically fills out forms on web pages with predefined data. This can be particularly useful for quickly testing forms or filling in repetitive data.

## Features

- Automatically fills out input, textarea, and select fields based on `name`, `id`, `placeholder`, and associated `label`.
- Simulates user input by dispatching `input` and `change` events.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/auto-form-filler.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable Developer Mode by toggling the switch in the top right corner.

4. Click "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. Navigate to a web page with a form you want to fill out.

2. Click on the Auto Form Filler extension icon in the Chrome toolbar.

3. In the popup, click the "Fill Form" button to automatically fill the form with the predefined data.

## Files

- `manifest.json`: Metadata about the extension.
- `background.js`: Manages background events for the extension.
- `content.js`: Contains the logic to fill out the forms on the web pages.
- `popup.html`: HTML structure for the extension's popup.
- `popup.js`: JavaScript to handle user interactions in the popup.

## Configuration

To customize the form data, edit the `formData` object in `popup.js`:

```javascript
document.getElementById("fillForm").addEventListener("click", () => {
  const formData = {
    "username": "your_username",
    "password": "your_password",
    // Add more fields as needed
  };

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm", data: formData }, (response) => {
      console.log(response.status);
    });
  });
});
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
```

### Steps to Upload to GitHub

1. **Initialize a Git Repository**:
   ```bash
   cd /path/to/your-project
   git init
   ```

2. **Add Files to the Repository**:
   ```bash
   git add .
   ```

3. **Commit the Files**:
   ```bash
   git commit -m "Initial commit"
   ```

4. **Create a New Repository on GitHub**:
   - Go to [GitHub](https://github.com/) and create a new repository.

5. **Link Your Local Repository to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/auto-form-filler.git
   ```

6. **Push Your Changes to GitHub**:
   ```bash
   git push -u origin main
   ```

Replace `yourusername` and `auto-form-filler` with your GitHub username and the desired repository name. This will upload your extension to GitHub with the provided `README.md`.