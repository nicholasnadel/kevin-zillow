// this is the code which will be injected into a given page...

(function () {
  var myJavaScript = `

  function blip() {
    var searchTerm = document.querySelector(".d-mega").textContent;
    var zillowProxy = 
    "https://duckduckgo.com/?q=!ducky+" + searchTerm + "+site%3Azillow.com"
    window.open(zillowProxy, '_blank');
  }
              var listingagent = document.querySelector(".multiLineDisplay table.d14m164 tbody tr:nth-child(1) td span:nth-child(5) a").innerHTML;li
              var listingagentlabel = "<span>Listing Agent: </span>"
              var statuslabel = "<span>Status: </span>" 
              var status = document.querySelector(".multiLineDisplay TD.d14m11 span:nth-child(3)").innerHTML; 
              var listinginstclabel = "<span>Showing Instructions: </span>" 
              var listinginstc = document.querySelector("td table:nth-child(6) tbody tr:nth-child(1) td span:nth-child(3)").innerHTML;   
              var buttonclick = "<button onclick='creatItem()'>Click me</button>"
              document.getElementById("m_upHeader").innerHTML +=  
                "<div class='main-border'>" + "<button id="onclick='blip()'>Click me</button>" + statuslabel + status + '<br>' + listingagentlabel + listingagent + '<br>' + listinginstclabel + listinginstc + "</div>"
                "<h3>This is the text which has been inserted by JS</h3>";
                
                document.getElementById("myBtn").addEventListener("click", displayDate);
  
  
  console.log("heheheh");
  alert("hus")

  `; // end myJavaScript

  var scriptTag = document.createElement("script");
  scriptTag.innerHTML = myJavaScript;
  document.head.appendChild(scriptTag);
})();
