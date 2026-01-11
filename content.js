// YouTube No Comments - Content Script

(function() {
  'use strict';

  function applySettings(hideComments) {
    if (hideComments) {
      document.body.classList.add('ync-hide-comments');
    } else {
      document.body.classList.remove('ync-hide-comments');
    }
  }

  function init() {
    chrome.storage.sync.get({ hideComments: true }, (result) => {
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
