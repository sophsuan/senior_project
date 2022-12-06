// let nonce = crypto.randomBytes(16).toString("base64");
let nonce = "testTESTtestTEST";

var manifest = chrome.runtime.getManifest();

var clientId = encodeURIComponent(manifest.oauth2.client_id);
var scopes = encodeURIComponent(manifest.oauth2.scopes.join(" "));
var redirectUri = encodeURIComponent("https://" + chrome.runtime.id + ".chromiumapp.org");

var url = "https://accounts.google.com/o/oauth2/v2/auth" + 
          "?client_id=" + clientId + 
          "&response_type=id_token" + 
          "&access_type=offline" + 
          "&redirect_uri=" + redirectUri + 
          "&scope=" + scopes +
          "&nonce=" + nonce;

window.onload = function() {
  chrome.identity.launchWebAuthFlow(
    {
        "url": url, 
        "interactive":true
    }, 
    function(redirectedTo) {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
        else {
            // fetch("http://localhost:3001/api/user?" + new URLSearchParams(
            //   { "userId" : clientId }
            // ), {
            //   method: 'GET'
            // })
            //   .then((response) => {
            //     console.log(response);
            //     response.json().then((data) => {
            //         console.log(data);
            //     });
            // });

            var body = {};
            body["userId"] = clientId;
            body["experience"] = 1234;
            fetch('http://localhost:3001/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                body
              )
            })
            .then((response) => {
              console.log(response);
              response.json().then((data) => {
                  console.log(data);
              });
            });
        }
    }
  );
};