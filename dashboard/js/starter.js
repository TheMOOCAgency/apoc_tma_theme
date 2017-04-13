
var nameImgFolder="assetsExt/dashboard/images";
var imgFolderdashBoardMiniLeftLogo="logo.png";
var dashBoardMiniRightLogLeftLogo="idPhoto.png";
var logoTitle="Amundi ESR Formation Online";
var firstName=userFName;
var familyName=userLName;
var logtrue=firstName+" "+familyName;
var imgFolder=nameImgFolder+"/";
var imgFolder=nameImgFolder+"/";
var url="url"
var disconnectFunction = function(){location.href='/logout';}
var dashboardFunction = function(){alert( "Handler disconect" );}
var rulesFunction = function(){alert( "Handler disconect" );}


$('#dashBoardMiniLeft').css('background-image',url+"("+imgFolder+imgFolderdashBoardMiniLeftLogo+")");
$('#dashBoardMiniRightLogLeft').css('background-image',url+"("+imgFolder+dashBoardMiniRightLogLeftLogo+")");
$('#dashBoardMiniRightLogRightLogo').text(logoTitle);
$('#logName').text(logtrue);


	

	
$( "#dashBoardMiniRightLogRightDisconect" ).click(function() {
  disconnectFunction();
  
});

$( "#dashBoardMiniRightLogRightDashboard" ).click(function() {
dashboardFunction();
});

$( "#dashBoardMiniRightLogRightRules" ).click(function() {

rulesFunction();
});
      	  


