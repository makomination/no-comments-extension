// YouTube No Comments - Content Script

(function() {
  'use strict';

  function applySettings(hideComments) {
    document.body.classList.toggle('ync-hide-comments', hideComments);
  }

  function init() {
    chrome.storage.sync.get({ hideComments: false }, (result) => {
      if (chrome.runtime.lastError) {
        console.error('[YouTube No Comments] Failed to load settings:', chrome.runtime.lastError.message);
        applySettings(false); // Fallback: show comments on error
        return;
      }
      applySettings(result.hideComments);
    });
  }

  // Listen for settings changes
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.hideComments) {
      applySettings(changes.hideComments.newValue);
    }
  });

  // Run after DOM is ready
  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
