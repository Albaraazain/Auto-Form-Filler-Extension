// This script enables interaction with web pages to automate form filling based on provided data.

// Set up a listener for messages from the popup script.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    const formData = request.data;

    // Helper function to set value to input fields
    const setValue = (element, value) => {
      if (element) {
        element.value = value;
        // Trigger input events to simulate user interaction
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    // Iterate through each key-value pair in the provided form data
    for (const [key, value] of Object.entries(formData)) {
      // Try different selectors to find and set the form field value
      setValue(document.querySelector(`input[name="${key}"]`), value);
      setValue(document.querySelector(`input[id="${key}"]`), value);
      setValue(document.querySelector(`textarea[name="${key}"]`), value);
      setValue(document.querySelector(`textarea[id="${key}"]`), value);
      setValue(document.querySelector(`select[name="${key}"]`), value);
      setValue(document.querySelector(`select[id="${key}"]`), value);

      // Attempt to find the input field associated with a label containing the key as its text content
      const label = Array.from(document.querySelectorAll('label')).find(
        lbl => lbl.textContent.trim() === key
      );
      if (label && label.htmlFor) {
        setValue(document.getElementById(label.htmlFor), value);
      }

      // Attempt to find the input field using the placeholder attribute
      const placeholderInput = document.querySelector(`input[placeholder="${key}"]`);
      setValue(placeholderInput, value);
    }

    // Respond with a status indicating the form has been filled
    sendResponse({ status: "formFilled" });
  }
});

// The script listens for specific messages indicating a form needs to be filled and then populates the form fields accordingly.
