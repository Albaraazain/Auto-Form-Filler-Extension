// The script will handle button click in the button which will trigger the form-filling action

document.getElementById("fillForm").addEventListener("click", () => {
    const formData = {
      "username": "albaraazain",
      "First Name": "albaraa taher",
      "firstname": "albaraa",
      "lastname":" taher zeinoglu",
      "Last Name": "zeinoglu",
      "password": "your_password"
      // Add more fields as needed
    };
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm", data: formData }, (response) => {
        console.log(response.status);
      });
    });
  });
  