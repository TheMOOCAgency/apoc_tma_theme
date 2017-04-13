
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////
// MENU STARTER/////////////////////////////////////////

	var cookContent = document.cookie, cookEnd, i, j;
	var cookie_apoc = cookie_apoc + "=";


   function getCookie(name){
     if(document.cookie.length == 0)
       return null;

     var regSepCookie = new RegExp('(; )', 'g');
     var cookies = document.cookie.split(regSepCookie);

     for(var i = 0; i < cookies.length; i++){
       var regInfo = new RegExp('=', 'g');
       var infos = cookies[i].split(regInfo);
       if(infos[0] == name){
         return unescape(infos[1]);
       }
     }
     return null;
   }


   console.log('myCookie a pour valeur : ' + getCookie('cookie_apoc'));

var recept=0;
var teste=function(){

if (document.cookie.length > 0){
  var texte="status";
  var table=document.cookie.split(/;/);
  var valeur="";
  for (i=0;i<table.length;i++){
    if(table[i].indexOf(texte)!= -1){
      valeur = table[i].substring(Number(texte.length + table[i].indexOf( texte)), table[i].length);
    }
	recept=valeur;alert(recept);
  }
}
}


$('button').click(function(){
 data = {
  user_id:$('#user_id').val(),
  total_score:$('#total_score').val(),
  status:$('#status').val(),
  etape_id:$('#etape_id').val(),
  etape_score:$('#etape_score').val(),
 };
 $.ajax({
  url:'/apoc/status_and_score/',
  type:'POST',
  dataType:'json',
  data: data,
  success:function(data){
   console.log(data);
  }
 })
})




var catchCookie='{"status": {"position": 2, "trio": ["Julie.L", "Marc.G", "Christel.T"],"user_id": 32,"user_firstname":"En","user_lastname":"Cours","check": true, "current_status": 0, "score": { "score_total": 132, "score_detail": [] },"etape": {"etape_1_status": 0,"etape_2_status": 1,"etape_3_status": 0,"etape_4_status": 0,"etape_5_status": 1,"etape_6_status": 0,"etape_7_status": 2, "etape_8_status": 2}}}'

var catchCookie2=getCookie('cookie_apoc');
var ury=JSON.parse(catchCookie);
var userPosition=ury.status.position;
var userTop3=ury.status.trio;
var userId=ury.status.user_id;
var userLName=ury.status.user_lastname;
var userFName=ury.status.user_firstname;
var top1=ury.status.trio[0];
var top2=ury.status.trio[1];
var top3=ury.status.trio[2];
var check=ury.status.check;
var current_status=ury.status.current_status;
var scoreTotal=ury.status.score.score_total;
var scoreDetail=ury.status.score.score_detail;
var etape1=ury.status.etape.etape_1_status;
var etape2=ury.status.etape.etape_2_status;
var etape3=ury.status.etape.etape_3_status;
var etape4=ury.status.etape.etape_4_status;
var etape5=ury.status.etape.etape_5_status;
var etape6=ury.status.etape.etape_6_status;
var etape7=ury.status.etape.etape_7_status;
var etape8=ury.status.etape.etape_8_status;


var DbUserprogression = 75 + "%";
var DbUserClassement = userPosition;
var DbUserScore = scoreTotal;
var DbUserStep0 = 0;
var DbUserStep1=etape1;
var DbUserStep2=etape2;
var DbUserStep3=etape3;
var DbUserStep4=etape4;
var DbUserStep5=etape5;
var DbUserStep6=etape6;
var DbUserStep7=etape7;
var DbUserStep8=etape8;



// nom des item menuLeft
var itemTitle1 = "acteurs";
var itemTitle2 = "marchés";
var itemTitle3 = "principes";
var itemTitle4 = "fonds";
var itemTitle5 = "approches";
var itemTitle6 = "reporting";
var itemTitle7 = "risque / performance";
var itemTitle8 = "fonds de votre plan";

var itemDuree1 = 15;
var itemDuree2 = 15;
var itemDuree3 = 15;
var itemDuree4 = 15;
var itemDuree5 = 15;
var itemDuree6 = 15;
var itemDuree7 = 15;
var itemDuree8 = 15;


var itemDetails1 = "15m. / 10m. / 30m.";
var itemDetails2 = "15m. / 10m. / 30m.";
var itemDetails3 = "15m. / 10m. / 30m.";
var itemDetails4 = "15m. / 10m. / 30m.";
var itemDetails5 = "15m. / 10m. / 30m.";
var itemDetails6 = "15m. / 10m. / 30m.";
var itemDetails7 = "15m. / 10m. / 30m.";
var itemDetails8 = "15m. / 10m. / 30m.";

// nom des item menuLeft


// DASHBOARD




var Userprogression = DbUserprogression;
var UserClassement = DbUserClassement;
var UserScore = DbUserScore;


var MiniDashItem1 = "progression :" + " " + Userprogression
var MiniDashItemScore = "score :"
var MiniDashItem3 = "RANG : " + UserClassement + "e"



		var functionScoreStar = function() {
		    if (UserScore > 20) {
		        $('#MiniDashItemSkillStar1').css("background-image", "url('assetsExt/menuLeft/images/starOk.png')");
		    }
		    if (UserScore > 40) {
		        $('#MiniDashItemSkillStar2').css("background-image", "url('assetsExt/menuLeft/images/starOk.png')");
		    }
		    if (UserScore > 60) {
		        $('#MiniDashItemSkillStar3').css("background-image", "url('assetsExt/menuLeft/images/starOk.png')");
		    }
		    if (UserScore > 80) {
		        $('#MiniDashItemSkillStar4').css("background-image", "url('assetsExt/menuLeft/images/starOk.png')");
		    }
		    if (UserScore == 100) {
		        $('#MiniDashItemSkillStar5').css("background-image", "url('assetsExt/menuLeft/images/starOk.png')");
		    }

		}




		functionScoreStar();




		$('#MiniDashItem1').text(MiniDashItem1);
		$('#MiniDashItemScore').text(MiniDashItemScore);
		$('#MiniDashItem3').text(MiniDashItem3);




		$('#item1menuleftright1title').text(itemTitle1);
		$('#item2menuleftright2title').text(itemTitle2);
		$('#item3menuleftright3title').text(itemTitle3);
		$('#item4menuleftright4title').text(itemTitle4);
		$('#item5menuleftright5title').text(itemTitle5);
		$('#item6menuleftright6title').text(itemTitle6);
		$('#item7menuleftright7title').text(itemTitle7);
		$('#item8menuleftright8title').text(itemTitle8);

		$('#item1menuleftright1duree').text("Durée :" + " " + itemDuree1 + "m");
		$('#item2menuleftright2duree').text("Durée :" + " " + itemDuree2 + "m");
		$('#item3menuleftright3duree').text("Durée :" + " " + itemDuree3 + "m");
		$('#item4menuleftright4duree').text("Durée :" + " " + itemDuree4 + "m");
		$('#item5menuleftright5duree').text("Durée :" + " " + itemDuree5 + "m");
		$('#item6menuleftright6duree').text("Durée :" + " " + itemDuree6 + "m");
		$('#item7menuleftright7duree').text("Durée :" + " " + itemDuree7 + "m");
		$('#item8menuleftright8duree').text("Durée :" + " " + itemDuree8 + "m");

		$('#item1menuleftright1details').text("Détails :" + " " + itemDetails1);
		$('#item2menuleftright2details').text("Détails :" + " " + itemDetails2);
		$('#item3menuleftright3details').text("Détails :" + " " + itemDetails3);
		$('#item4menuleftright4details').text("Détails :" + " " + itemDetails4);
		$('#item5menuleftright5details').text("Détails :" + " " + itemDetails5);
		$('#item6menuleftright6details').text("Détails :" + " " + itemDetails6);
		$('#item7menuleftright7details').text("Détails :" + " " + itemDetails7);
		$('#item8menuleftright8details').text("Détails :" + " " + itemDetails8);




		$('#itemMenuLeftLeftMiniTrue1').css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
		$('#itemMenuLeftLeftMiniTrue2').css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
		$('#itemMenuLeftLeftMiniTrue3').css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
		$('#itemMenuLeftLeftMiniTrue4').css("background-image", "url('assetsExt/menuLeft/images/wait.png')");
		$('#itemMenuLeftLeftMiniTrue5').css("background-image", "url('assetsExt/menuLeft/images/cancel.png')");
		$('#itemMenuLeftLeftMiniTrue6').css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
		$('#itemMenuLeftLeftMiniTrue7').css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
		$('#itemMenuLeftLeftMiniTrue8').css("background-image", "url('assetsExt/menuLeft/images/cancel.png')");

	var pas=0;

		 var DbUserStep = new Array(DbUserStep1,DbUserStep2,DbUserStep3,DbUserStep4,DbUserStep5,DbUserStep6,DbUserStep7,DbUserStep8);




		var validStepFunction = function() {



		for (pas = 0; pas < 10; pas++)

		{
						DbUserStep1=etape1;
						DbUserStep2=etape2;
						DbUserStep3=etape3;
						DbUserStep4=etape4;
						DbUserStep5=etape5;
						DbUserStep6=etape6;
						DbUserStep7=etape7;
						DbUserStep8=etape8;
			DbUserStep = new Array(DbUserStep1,DbUserStep2,DbUserStep3,DbUserStep4,DbUserStep5,DbUserStep6,DbUserStep7,DbUserStep8);


			var concat=DbUserStep+pas;

		    if (DbUserStep[pas-1] == 0||DbUserStep[pas] == null) {
		        $('#itemMenuLeftLeftMiniTrue'+pas).css("background-image", "url('assetsExt/menuLeft/images/cancel.png')");
				console.log("0: "+DbUserStep+pas);
		    }
		    if (DbUserStep[pas-1] == 1) {
		        $('#itemMenuLeftLeftMiniTrue'+pas).css("background-image", "url('assetsExt/menuLeft/images/wait.png')");
				console.log("1: "+DbUserStep+pas);

		    }

		    if (DbUserStep[pas-1] == 2) {
		        $('#itemMenuLeftLeftMiniTrue'+pas).css("background-image", "url('assetsExt/menuLeft/images/valid.png')");
				console.log("2: "+DbUserStep+pas);
		    }



		};



											}




		validStepFunction();


var iframegestion1=function(){$('#iframeContent').attr("src","../../etape1/etape1.html");

localStorage.setItem("DbUserStep1",1);validStepFunction ();$("#StepNumberBig").text("1");


}

var iframegestion2=function(){$('#iframeContent').attr("src","../../etape2/etape2c.html");
localStorage.setItem("DbUserStep2",1);validStepFunction ();$("#StepNumberBig").text("2");
}

var iframegestion3=function(){$('#iframeContent').attr("src","../../etape3/etape3.html");localStorage.setItem("DbUserStep3",1);validStepFunction ();$("#StepNumberBig").text("3");}


var iframegestion4=function(){$('#iframeContent').attr("src","../../etape4/etape4.html");
localStorage.setItem("DbUserStep4",1);
validStepFunction ();$("#StepNumberBig").text("4");

}


var iframegestion5=function(){$('#iframeContent').attr("src","../../etape5/etape5.html");localStorage.setItem("DbUserStep5",1);validStepFunction ();$("#StepNumberBig").text("5");}



var iframegestion6=function(){$('#iframeContent').attr("src","../../etape6/etape6.html");localStorage.setItem("DbUserStep6",1);validStepFunction ();$("#StepNumberBig").text("6");}

var iframegestion7=function(){$('#iframeContent').attr("src","../../etape7/etape7.html");localStorage.setItem("DbUserStep7",1);validStepFunction ();$("#StepNumberBig").text("7");}

var iframegestion8=function(){$('#iframeContent').attr("src","../../etape8/etape8.html");localStorage.setItem("DbUserStep8",1);validStepFunction ();$("#StepNumberBig").text("8");}






var Ask=function(){ localStorage.clear();validStepFunction();

}

var startFrame=function(){ $('#iframeContent').attr("src","../../dash/index.html");}














		// for (DbUserStep = 0; DbUserStep < 9; DbUserStep++) {

		// $('#itemMenuLeftLeftMiniTrue'+DbUserStep).css("background-image","url('assetsExt/menuLeft/images/valid.png')");
		// }