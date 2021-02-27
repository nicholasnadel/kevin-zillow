document.addEventListener(
  "DOMContentLoaded",
  function () {
    var editPageButton = document.getElementById("edit-page");
    editPageButton.addEventListener(
      "click",
      function () {
        chrome.tabs.getSelected(null, function (tab) {
          var scriptTag = document.createElement("script");
          var myJavaScript = `var page_id = document.querySelector('meta[name="id"]').content;

var window_location = window.location;
var asset_path = location.pathname;

console.log('page id: ' + page_id);
if (window_location.href.indexOf("dev") > -1) {
  var domain = "https://dev-cascade.chapman.edu/";
} else {
  var domain = "https://cascade.chapman.edu/";
}

// console.log('asset_path: ' + domain + asset_path)
fetch(domain + 'api/v1/read/page/' + page_id + '?apiKey=e3bc4818-3149-44ee-a2ee-fe5030336584').then(function (response) {
  // The API call was successful!
  return response.json();
}).then(function (data) {
  // This is the JSON from our response
  console.log(data['asset']['page']['lastPublishedDate']);
console.log(data);
}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});

var url = domain + "entity/open.act?id=" + page_id + "&type=page";
var win = window.open(url, "_blank");
win.focus();
`;

          scriptTag.innerHTML = myJavaScript;
          document.head.appendChild(scriptTag);
        });
      },
      false
    );
  },
  false
);
