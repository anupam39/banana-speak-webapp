var trtbutton=document.querySelector("#trt-button");
var txtinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#output");
//console.log(txtinput)
var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(input)
{
    return serverURL + "?" + "text=" +input
}
function errorHandler()
{
    console.log("errror ocurred", error);
    alert("Something wrong with the server!")
}
function clickHandler() {
    var inputText= txtinput.value;
    fetch(getTranslationURL(inputText))
     .then(response=>response.json())
     .then(json=>{
        var translatedText = json.contents.translated;
        txtoutput.innerText= translatedText;
    })
    .catch(errorHandler)
};
trtbutton.addEventListener("click", clickHandler);
