function save_options() {
    var iconurl = document.getElementById('iconurl').value;
    chrome.storage.sync.set({
        iconUrl: iconurl
    }, function() {
        // Update status to let user know optins were saved.
        var status = document.getElementById('status');
        status.textContent = '設定を保存しました。';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        iconUrl: ''
    }, function(items) {
        document.getElementById('iconurl').value = items.iconUrl;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
