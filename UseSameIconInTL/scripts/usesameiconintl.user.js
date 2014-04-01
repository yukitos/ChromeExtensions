// ==UserScript==
// @name            UseSameIconInTL
// @namespace       yukitos
// @version         0.0.1
// @include         https://twitter.com/*
// ==/UserScript==

$(function() {
  chrome.storage.sync.get({
    iconUrl: ''
  }, function(items) {
    var iconurl = items.iconUrl;

    if (iconurl == null || iconurl.length < 1) {
      return;
    }

    var updateicons = function() {
      var imgs1 = $('.avatar.js-action-profile-avatar');
      var imgs2 = $('.inline-reply-user-image.avatar.size32');
      var imgs3 = $('.avatar.size32');

      $.each([imgs1,imgs2,imgs3], function() {
          $(this).attr('src', iconurl);
      });
    };

    $(document).bind('DOMNodeInserted', function(e) {
      $(e.target).find('.avatar.js-action-profile-avatar').attr('src', iconurl);
      $(e.target).find('.avatar.size24.js-user-profile-link').attr('src', iconurl);
    });
    updateicons();
  });
});
