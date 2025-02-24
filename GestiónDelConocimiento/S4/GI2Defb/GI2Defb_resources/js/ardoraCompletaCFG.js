//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=19; attempts=0; attemptsMax=3;
var score=0; scoreMax=19; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente trabajo! Pasas al siguiente nivel."; messageTime=""; messageError="¡Upps Te equivocaste! Repasa e inténtalo de nuevo."; messageAttempts="¡Ánimo! Inténtalo de nuevo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>La Gestión de la Información utiliza  <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> o Tecnologías de la Información y Comunicación, que son el conjunto de <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> técnicos y tecnológicos <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> dinamicamente y <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> para la búsqueda de informaciòn actualizada sobre el área de estudio, con base a un acercamiento a <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> y experiencias registradas, que pueden generar <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> en un contexto especìfico.</p>','<p>La Gestión de la información realiza una mejora de dinámicas profesionales del </p><p> 1. <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> mediante Definición de objetivos Identificación de  <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly>.  </p><p> 2. <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> por medio de <input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> y Clasificaciòn de Información. </p><p> 3. Tratamiento y Difusión a través de <input type="text" name="item11" id="item11" class="ardoraDropInput" readonly>  de la información y <input type="text" name="item12" id="item12" class="ardoraDropInput" readonly> de la información.</p>','<p>Las empresas e instituciones educativas tienen como interés <input type="text" name="item13" id="item13" class="ardoraDropInput" readonly> el entorno, ofreciendo un <input type="text" name="item14" id="item14" class="ardoraDropInput" readonly> que los diferencie de otras empresas del medio, garantizando crecimiento y <input type="text" name="item15" id="item15" class="ardoraDropInput" readonly>, a través de la recopilación de información en <input type="text" name="item16" id="item16" class="ardoraDropInput" readonly> humanas y documentales que puedan soportar la creaciòn, <input type="text" name="item17" id="item17" class="ardoraDropInput" readonly> e intercambio,  de nuevo <input type="text" name="item18" id="item18" class="ardoraDropInput" readonly> para la <input type="text" name="item19" id="item19" class="ardoraDropInput" readonly> en la prestación de servicios.</p>'];
var answers=["valor agregado","fuentes","posicionamiento","conocimiento","difusión","innovación","TIC","diversas fuentes","necesidades","conocimiento","Elaboración y difusión","recursos","interrelacionados","organizados","Entorno","Fuentes","Análisis y Validación","Identificación de fuentes","impactar"];
var a=["MTQ","MTY","MTU","MTg","MTc","MTk","MQ","NQ","OA","Ng","MTI","Mg","Mw","NA","Nw","OQ","MTE","MTA","MTM"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="R0kyRGVmYg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";tiAval=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
