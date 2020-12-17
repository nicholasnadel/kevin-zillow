// this is the code which will be injected into a given page...

(function () {
  var myJavaScript = `var page_id = document.querySelector('meta[name="id"]').content;

  var window_location = window.location;

  console.log('page id: ' + page_id);
  if (window_location.href.indexOf("dev") > -1) {
    var domain = "https://dev-cascade.chapman.edu/";
  } else {
    var domain = "https://cascade.chapman.edu/";
  }
  
  var url = domain + "entity/open.act?id=" + page_id + "&type=page";
  var win = window.open(url, "_blank");
  win.focus();
  `;
  var scriptTag = document.createElement("script");
  scriptTag.innerHTML = myJavaScript;
  document.head.appendChild(scriptTag);
})();
