document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');

  chrome.storage.sync.get({ hideComments: false }, (result) => {
    if (chrome.runtime.lastError) {
      console.error('[No Comments Extension] Failed to load settings:', chrome.runtime.lastError.message);
      return;
    }
    toggle.checked = result.hideComments;
  });

  toggle.addEventListener('change', () => {
    chrome.storage.sync.set({ hideComments: toggle.checked }, () => {
      if (chrome.runtime.lastError) {
        console.error('[No Comments Extension] Failed to save settings:', chrome.runtime.lastError.message);
      }
    });
  });
});
