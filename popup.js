document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');

  chrome.storage.sync.get({ hideComments: true }, (result) => {
    toggle.checked = result.hideComments;
  });

  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ hideComments: toggle.checked });
  });
});
