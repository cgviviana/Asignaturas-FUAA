//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function showMessage(typeMessage){ var oldTypeGame=typeGame;typeGame=99;isShowMessage=true; if (typeMessage=="Ok"){ var textMessage=messageOk; var urlMessage=urlOk; var goURLTarget= goURLOk; var borderColor=borderOk;}
if (typeMessage == "scoMessage") {var textMessage = scoMessage; var urlMessage = "";var goURLTarget = "";var borderColor = borderAttempts;}
if (typeMessage=="Time"){var textMessage=messageTime;var urlMessage=urlTime; var goURLTarget= goURLTime; var borderColor=borderTime;}
if (typeMessage=="Error"){var textMessage=messageError;var urlMessage=urlError; var goURLTarget= goURLError; var borderColor=borderError;}
if (typeMessage=="Attempts"){ if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}var textMessage=messageAttempts;var urlMessage=urlAttempts; var goURLTarget= goURLAttempts; var borderColor=borderAttempts;}
var canvas = document.getElementById("ardoraActCanvas"); document.getElementById("ardoraActCanvas").style.zIndex=5;
document.getElementById("ardoraActCanvas").style["visibility"]="visible";canvas.width = canvas.width;
var contexto = canvas.getContext("2d"); contexto.globalAlpha = 0.50;contexto.fillStyle = colorBack;
contexto.fillRect(0,0,canvas.width,canvas.height); contexto.font="18px " + fMenssage; var metricsW = contexto.measureText(textMessage).width;var x=(canvas.width / 2)-(metricsW / 2);var y=(canvas.height / 2);
if (metricsW<canvas.width-20){ contexto.beginPath(); contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = "white"; var xAnim=canvas.width/2; var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = borderColor; roundedRect(contexto,xAnim,y-20,wAnim,30,5,"white"); xAnim-=1; wAnim+=2; if (wAnim>metricsW+30){ clearInterval(interval); contexto.shadowColor = "black";
contexto.shadowBlur = 20; contexto.shadowOffsetX = 10; contexto.shadowOffsetY = 10; contexto.stroke(); contexto.beginPath(); contexto.textAlign = "left"; contexto.fillStyle = "black"; contexto.fillText(textMessage,x,y);
contexto.lineWidth = 5; contexto.stroke(); messagePlayAudio(typeMessage);
goURL(urlMessage,timeOnMessage,goURLTarget,typeMessage,tiTimeType);}},1);
}else{outLines=printJustify(contexto,textMessage, 50, canvas.height/2, 30, canvas.width-100);contexto.beginPath(); contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = "white"; var xAnim=canvas.width/2;var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = borderColor;roundedRect(contexto,xAnim,(canvas.height/2)-(30*outLines.length/2),wAnim,30*outLines.length+20,5,"white");
xAnim-=1;wAnim+=2;if (wAnim>canvas.width-80){clearInterval(interval);contexto.shadowColor = "black";contexto.shadowBlur = 20;contexto.shadowOffsetX = 10;contexto.shadowOffsetY = 10;
contexto.stroke();contexto.beginPath();contexto.textAlign = "left";contexto.fillStyle = "black";for (i=0; i<outLines.length; i++){contexto.fillText(outLines[i], 50,(canvas.height/2)-(30*outLines.length/2)+((i+1)*30));
} contexto.lineWidth = 5; contexto.stroke(); messagePlayAudio(typeMessage);
goURL(urlMessage,timeOnMessage,goURLTarget,typeMessage,tiTimeType);}},1);}
if (typeMessage=="Error"){backAct(timeOnMessage,oldTypeGame,"0");}
if (typeMessage=="Time"){if (tiTimeType==1){timeAct=timeIni;backTime(timeOnMessage);backAct(timeOnMessage,oldTypeGame,"0");}if (tiTimeType==2){backSol(timeOnMessage,oldTypeGame);}}}
function goURL(url,seg,tar,tM, tT){
var state;
if (tM == "Ok") {state="ok";}
if (tM == "Attempts"){state="erro";}
if (tM == "Error"){state="erro";}
if (tM == "Time"){state="temp";}
if (tiAval){parent.actualizaInfoAct(score,attempts,state);}
newWin = setTimeout("opURL('"+url+"','"+seg+"','"+tar+"','"+tM+"','"+tT+"')",seg*1000);}
function opURL(url, seg, tar, tM,tT) {
if (url != "") {window.open(url,tar)};
if (tM == "Ok" && goURLNext ) {parent.avanza();}
if (tM == "Attempts" && goURLRepeat){parent.recarga()}
if (tM == "Time" && tT==0 && goURLRepeat){parent.recarga()}
if (tM == "Time" && tT==2 && goURLRepeat){parent.recarga()}
}
function messagePlayAudio(typeMessage){ if (typeMessage=="Ok"){document.getElementById("audioFelicitacion").play()} if (typeMessage=="Error"){document.getElementById("audioErro").play()}}
function backAct(seg,oldTypeGame,type){setTimeout(function(){isShowMessage=false;
document.getElementById("ardoraActCanvas").style.zIndex=0; document.getElementById("ardoraActCanvas").style["visibility"]="hidden";typeGame=oldTypeGame;
showCorrect();
},seg*1000);}
function backTime(seg){ setTimeout(function(){timeInterval=setInterval("paintTab()",1000);isShowMessage=false;},seg*1000);}
function backSol(seg,oldTypeGame){setTimeout(function(){showSol(oldTypeGame);},seg*1000);}
function paintButtonTime(){var actArea=document.getElementById("ardoraActCanvas"); document.getElementById("ardoraActCanvas").style.zIndex=5;document.getElementById("ardoraActCanvas").style["visibility"]="visible";
document.getElementById("ardoraTab").style["visibility"]="hidden";
$("#ardoraActCanvas").css("cursor", "pointer");if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}var canvas = document.getElementById("ardoraActCanvas");
var contexto = canvas.getContext("2d");canvas.width = canvas.width;contexto.globalAlpha = 0.98;contexto.fillStyle = colorButton;contexto.fillRect(0,0,canvas.width,canvas.height);
contexto.lineWidth = 2;contexto.strokeStyle = colorSele;contexto.rect(5,5,canvas.width-10,canvas.height-10);contexto.stroke();
contexto.font="18px " + fMenssage;var metricsW = contexto.measureText(textButtonTime).width;var x=(canvas.width / 2)-(metricsW / 2);var y=(canvas.height / 2);
contexto.beginPath(); contexto.globalAlpha = 1;contexto.lineWidth = 2;contexto.fillStyle = colorBack;var xAnim=canvas.width/2;var wAnim=0;interval = setInterval(function () {
contexto.strokeStyle = colorText;roundedRect(contexto,xAnim,y-20,wAnim,30,5,colorBack);xAnim-=1;wAnim+=2;if (wAnim>metricsW+30){
clearInterval(interval);contexto.shadowColor = "black";contexto.shadowBlur = 20;contexto.shadowOffsetX = 10;contexto.shadowOffsetY = 10;
contexto.stroke();contexto.beginPath();contexto.textAlign = "left";contexto.fillStyle = colorText;contexto.fillText(textButtonTime,x,y);contexto.lineWidth = 5;contexto.stroke();}},1);
$("#ardoraActCanvas").mousedown(function(e){if (tiTime || tiAttempts || tiScore || tiSuccesses ){timeInterval=setInterval("paintTab()",1000);$("#ardoraActCanvas").css("cursor", "default");
$("#ardoraActCanvas").unbind("mousedown");document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";document.getElementById("ardoraTab").style["visibility"]="visible";paintBack();}});}
function cssColors(){
$("body").css("background-color",colorBack);
$("#ardoraMain").css("color",colorText);
if ($(".txtCell_input").length !=0) { $(".txtCell_input").css("background-color",colorBack); $(".txtCell_input").css("color",colorText);};
if ($(".txtCell_txt").length !=0) { $(".txtCell_txt").css("background-color",colorBack)}
if ($(".txtCell_txt").length !=0) {var color2=colorSele;var color1=colorBack;
$(".txtCell_txt").css("background","-webkit-radial-gradient(center, ellipse, "+color1+","+color2+")");
$(".txtCell_txt").css("background","-moz-radial-gradient(center,ellipse, "+color1+", "+color2+")");
$(".txtCell_txt").css("background","-ms-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(".txtCell_txt").css("background","-o-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(".txtCell_txt").css("background","radial-gradient(ellipse at center, "+color1+", "+color2+")");
$(".txtCell_txt").css("filter","progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");}
$("#ardoraMain").css("font-family",fEnun); $(".txtCell").css("font-family",fActi); $("#ardoraAct").css("font-family",fActi);$(".txtCellHome").css("font-family",fActi);$(".txtCell_txt").css("font-family",fActi);
}
