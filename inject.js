// this is the code which will be injected into a given page...

(function () {
  var myJavaScript = `

  var window_location = window.location;

  
  var zillow = 'https://zillow.com';

  var mlsAddressToSearch = document.getElementsByClassName('ugiz4pqJLAG__primary-text');
  var mlsAddressToSearchFirstInstance = mlsAddressToSearch[0];
console.log('mlsAddressToSearchFirstInstance: ' + mlsAddressToSearchFirstInstance)
  
var tab = window.open('zillow', '_blank');
// tab.document.write(mlsAddressToSearchFirstInstance); // where 'html' is a variable containing your HTML
// tab.document.close(); // to finish loading the page

  `;

  var scriptTag = document.createElement("script");
  scriptTag.innerHTML = myJavaScript;
  document.head.appendChild(scriptTag);
})();
