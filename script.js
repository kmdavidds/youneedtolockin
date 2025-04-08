function storeToggle(value) {
  chrome.storage.local.set({ toggle: value });
}

function setCSS(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}

chrome.storage.local.get(["toggle"]).then((result) => {
  let toggle = result.toggle;
  if (toggle === undefined) {
    storeToggle("on");
  }

  let toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.innerHTML = toggle;
  if (toggle == "off") {
    setCSS("--button-bg-color", "green");
  }

  toggleBtn.addEventListener("click", () => {
    if (toggle == "on") {
      toggle = "off";
      storeToggle("off");
      toggleBtn.innerHTML = "off";
      setCSS("--button-bg-color", "green");
    } else if (toggle == "off") {
      toggle = "on";
      storeToggle("on");
      toggleBtn.innerHTML = "on";
      setCSS("--button-bg-color", "red");
    }
  });
});
