# Bory Hospital Form Autofiller

Chrome extension that automatically fills registration form at https://rezervacie.porodnicabory.sk/register

## Features
- Fills personal info
- Sets insurance provider
- Selects state and city 
- Handles checkboxes
- Works with Angular Material form components

## Installation
1. Clone repo
2. Open Chrome Extensions (chrome://extensions/)
3. Enable Developer mode
4. Click "Load unpacked"
5. Select extension directory

## Configuration
Edit formData in content.js to change default values:
```javascript
const formData = {
   'first-name': 'petra',
   'last-name': 'marcinova',
   //...
};
