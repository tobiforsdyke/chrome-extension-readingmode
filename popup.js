let blueBTN = document.getElementById('blueBTN');
let creamBTN = document.getElementById('creamBTN');
let blackBTN = document.getElementById('blackBTN');
let whiteBTN = document.getElementById('whiteBTN');
let extensionNameH1 = document.getElementById('extensionNameH1');

var changeColour = function(colour){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:'document.body.style.backgroundColor = "'+colour+'";'},
      function(){});
  });
};

var changeFont = function(font){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code:'object.style.fontFamily = "'+font+'";'},
      function(){});
  });
};

blueBTN.addEventListener('click', function(e){
  changeColour('#a6ccff');
  changeFont('opendyslexic');
});
creamBTN.addEventListener('click', function(e){
  changeColour('#fcfcec');
});
blackBTN.addEventListener('click', function(e){
  changeColour('#1c1c1c');
});
whiteBTN.addEventListener('click', function(e){
  changeColour('white');
});

function load_extension_name(){
  chrome.storage.sync.get(['extensionText'], function(result) {
    if(result.extensionText != undefined){
      extensionNameH1.innerHTML = result.extensionText;
    }
  });
}

document.addEventListener('DOMContentLoaded',load_extension_name);
