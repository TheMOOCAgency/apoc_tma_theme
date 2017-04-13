
      // $(function() {
		  // /**
      // fonction d'animation
      // */
          // $('#sdt_menu > li').bind('mouseenter',function(){
      // var $elem = $(this);
      // $elem.find('img')
      // .stop(true)
      // .animate({
      // 'width':'176px',
      // 'height':'176px',
      // 'left':'0px'
      // },400,'easeOutBack')
      // .andSelf()
      // .find('.sdt_wrap')
      // .stop(true)
      // .animate({'top':'120px'},500,'easeOutBack')
      // .andSelf()
      // .find('.sdt_active')
      // .stop(true)
      // .animate({'height':'176px'},300,function(){
      // var $sub_menu = $elem.find('.sdt_box');
      // if($sub_menu.length){
      // var left = '182px';
      // if($elem.parent().children().length == $elem.index()+1)
      // left = '-150px';
      // $sub_menu.show().animate({'left':left},200);
      // }	
      // });
      // }).bind('mouseleave',function(){
      // var $elem = $(this);
      // var $sub_menu = $elem.find('.sdt_box');
      // if($sub_menu.length)
      // $sub_menu.hide().css('left','0px');
      
      // $elem.find('.sdt_active')
      // .stop(true)
      // .animate({'height':'0px'},300)
      // .andSelf().find('img')
      // .stop(true)
      // .animate({
      // 'width':'0px',
      // 'height':'0px',
      // 'left':'85px'},400)
      // .andSelf()
      // .find('.sdt_wrap')
      // .stop(true)
      // .animate({'top':'5px'},500);
      // });
      // });
      
      
      
      /**
      PERSONNALISATION DU MENU
      */
      
      
      // <!-- Gestion des textes menus -->
      
      
      
      // <!-- titre principal -->
      var item1MainTitle="COMMENT JOUER";
      // <!-- sous titre -->
      var item1SubTitle="TUTORIEL";
      // <!-- titre principal -->
      var item2MainTitle="FORUM";
      // <!-- sous titre -->
      var item2SubTitle="VOS ÉCHANGES";
      // <!-- titre principal -->
      var item3MainTitle="GLOSSAIRE";
      // <!-- sous titre -->
      var item3SubTitle="GESTION FINANCIÈRE";
      // <!-- titre principal -->
      var item4MainTitle="BIBLIOTHÈQUE";
      // <!-- sous titre -->
      var item4SubTitle="A TÉLÉCHARGER";
      
      
      
      // <!-- Gestion des textes menus -->
      
      
      
      /**
      -----------------------------------
      **/
      
      
      // <!-- Gestion des images menus -->
      
      // <!-- nom du dossier -->
      var nameImgFolder="assetsExt/menutop/images";
      // <!-- image-->
      var menuImg1="1.png";
      // <!-- image -->
      var menuImg2="2.png";
      // <!-- image -->
      var menuImg3="3.png";
      // <!-- image -->
      var menuImg4="4.png";
      
      
      
      // <!-- Gestion des images menus -->
      
      
      
      
      /**
      -----------------------------------
      **/
      
      
      
      
      
      
      
      
      /**
      PERSONNALISATION DU MENU
      */
      
      
      
      
      
      
      var imgFolder=nameImgFolder+"/";
      
      $('#listItem01').find('img').attr("src",imgFolder+menuImg1);
      $('#listItem02').find('img').attr("src",imgFolder+menuImg2);
      $('#listItem03').find('img').attr("src",imgFolder+menuImg3);
      $('#listItem04').find('img').attr("src",imgFolder+menuImg4);
      
      
      
      
      $('#listItem01').find('.sdt_link').text(item1MainTitle);
      $('#listItem01').find('.sdt_descr').text(item1SubTitle);
      $('#listItem02').find('.sdt_link').text(item2MainTitle);
      $('#listItem02').find('.sdt_descr').text(item2SubTitle);
      $('#listItem03').find('.sdt_link').text(item3MainTitle);
      $('#listItem03').find('.sdt_descr').text(item3SubTitle);
      $('#listItem04').find('.sdt_link').text(item4MainTitle);
      $('#listItem04').find('.sdt_descr').text(item4SubTitle);
