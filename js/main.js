$( document ).ready(function() {
    $(window).scroll(function(){ 
    $('nav').toggleClass('scrolled', $(this).scrollTop() >250); 
    });
    var nizNavigacija = [
      ['#Onama','O NAMA'],
      ['#usluge','USLUGE'],
      ['#SlikaKontakt','KONTAKT'],
      ['documentacija.pdf','DOCS']
];
function ispisLinkova(){
  for(let i=nizNavigacija.length-1; i>=0; i--){
    $(`<li class='nav-item'>
    <a class='nav-link' href='${nizNavigacija[i][0]}'>${nizNavigacija[i][1]}</a>
  </li>`).insertAfter("#navbarNav ul li:first-child");
  }
}
ispisLinkova();
    var nizSlika = [
        ['Popravka kvarova na vozilu','Vršimo popravke svih kvarova,od ispadanja menjaca, preko napuklih vetrobrana,pa sve do pucanja kardana,naravno tu smo za Vas kao uteha da nije sve tako crno i belo jer pored problema sa kvarom,nećete imati probleme sa cenom.'],
        ['Osiguranja','Kod nas možete dobiti doivotno osiguranje pa čak i kad ste krivi, mi plaćamo vašu štetu na drugom vozilu ili nekom drugom licu u zavisnosti od toga šta ste sve uradili, naravno osiguranje možete iskoristiti za placanje sudskih troskova u slučaju neke parnice vezane za saobraćajnu nezgodu.'],
        ['Tehnički pregled','Kao što znate (verovatno znate jer se dobar glas na daleko čuje), mi smo prvi u Svetu po utvrđivanju kvarova na vozilu, iza nas je Kina , pa Amerika, a potom i Rusija, dođite, proverite ispravnost vašeg vozila.']
];
    var i=0;
    function promenaSlike(){
        //$(".slider1").css("background-image",`url(${nizSlika[i][0]}`);
        $(".providno").html(`<h1>${nizSlika[i][0]}</h1><p>${nizSlika[i][1]}</p>`);
        if(i<nizSlika.length-1){
          i++;
        }
        else {i=0};
        setTimeout(promenaSlike, 4000);
      }
      promenaSlike();
      $(".nevidljiv").hide();
      $("#pogledajVise").click(function(e){
        e.preventDefault();
        $(".nevidljiv").slideToggle("slow");
        $(this).text(function () {
          $(this).text(($(this).text() == 'Pogledaj ostale usluge') ? 'Sakrij ostale usluge':'Pogledaj ostale usluge')
      })
      })//
      function PaddAuto(){
        $("#dodjite").click(function nesto(){
          $("#auto").animate({right:"75%"},3000);  
          setTimeout(function(){$("#auto").animate({right:"0%"},3000);
          },3000)
        })
      }
      PaddAuto();

        //jos jedno od mnogih dinamickih ispisivanja
        ispisSelect()
        function ispisSelect(){
          var opcije=['Izaberite grad','BEOGRAD','NIS','NOVI SAD','KRAGUJEVAC'];
        var ispisSelect ="<select id='gradovi'>"
        var br=0;
        for(vrednost of opcije){
          ispisSelect+=`<option value='${br++}'>${vrednost}</option>`;
        }
        ispisSelect+='</select>';
        console.log(ispisSelect)
        document.getElementById("ispis").innerHTML+=ispisSelect + '<span id="grad">*</span>';
        }

        document.getElementById('posalji').addEventListener('click',provera);
        //
        document.getElementById("ime").addEventListener('blur',imePrezime);
        document.getElementById('email').addEventListener('blur',email);
        document.getElementById('telefon').addEventListener('blur',telefon);
       // document.getElementsByName('imeRadio').addEventListener('check',zbogCega);
        document.getElementById('gradovi').addEventListener('change',grad);
        document.getElementById('poruka').addEventListener('blur',poruka);
        //document.getElementById('agree').addEventListener('change',saglasnost);

        
        document.getElementById('posalji').addEventListener('click',obecestenje);

        function validno(regIzr, vrednost){
          if(regIzr.test(vrednost)){  
            return true;
          }
          else return false;         
        }
        function obecestenje(){
          if(validnoProvera()){
            alert("Poruka je uspešno poslata!!!")
          }
        }
       
        function validnoProvera(){
          var imePrezime=document.getElementById('ime').value.trim();
          var REGimePrezime=/^[A-ZŽĐŠČĆ][a-zžđščć]{2,14}(\s[A-ZŽĐŠČĆ][a-zžđščć]{2,14}){1,2}$/;
          var email = document.getElementById('email').value.trim();
          var REGemail =/^[A-zžđščć][A-zžđščć\d\_\.\-]+\@[a-z]{3,10}(\.[a-z]{2,4})+$/;
          var telefon= document.getElementById('telefon').value.trim();
          var REGtelefon = /^(06[0-9]|\+3816[0-9])\-[\d]{3}\-[\d]{3,4}$/;
          var poruka = document.getElementById('poruka').value.trim();
          var REGporuka = /^[A-zžđščć\s\/\-\_\+\@\,\.\'\"\%\d]{15,60}$/;
         if( zbogCegaProvera() &&
          validno(REGimePrezime, imePrezime)&&
          validno(REGemail, email)&&
          validno(REGtelefon, telefon)&&
          validno(REGporuka, poruka)&&
          gradProvera()&&
          saglasnostProvera()){return true;}
          else{ return false;}
        }
        function zbogCegaProvera(){
          var zbogCega = document.getElementsByName('imeRadio');
          var brojac=0;
            for(let vrednost of zbogCega){
                if(vrednost.checked){  
                    brojac++;
                }
            }
            if(brojac==0){
               return false;
            }
             return true;
           
        }
        function gradProvera(){
          var grad = document.getElementById('gradovi').value;
          if(grad=='0'){   
            return false;
          }
          return true;
          
        }

        function saglasnostProvera(){
          var saglasnost = document.querySelector('#saglasnost');
          if(!(saglasnost.checked)){  
            return false;
          }
           return true;

        }

        function imePrezime(){
          var imePrezime=document.getElementById('ime').value.trim();
          var REGimePrezime=/^[A-ZŽĐŠČĆ][a-zžđščć]{2,14}(\s[A-ZŽĐŠČĆ][a-zžđščć]{2,14}){1,2}$/;
          if( validno(REGimePrezime, imePrezime)){  
              document.getElementById('greskaImePrezime').innerHTML='';
              document.getElementById('greskaImePrezime').classList.remove('dodaj');
              document.getElementById('ime').style.borderBottom ='3px solid gray';
            }
          else {   
              document.getElementById('greskaImePrezime').innerHTML='Polje za ime i prezime nije u dobrom formatu!';
              document.getElementById('greskaImePrezime').classList.add('dodaj');
              document.getElementById('ime').style.borderBottom ='3px solid red';
            }
        }

        function email(){
          var email = document.getElementById('email').value.trim();
          var REGemail =/^[A-zžđščć][A-zžđščć\d\_\.\-]+\@[a-z]{3,10}(\.[a-z]{2,4})+$/;
          if(!validno(REGemail, email)){
        
              document.getElementById('greskaEmail').innerHTML='Polje za email nije u dobrom formatu!';
              document.getElementById('greskaEmail').classList.add('dodaj');
              document.getElementById('email').style.borderBottom ='3px solid red';
          }
          else {
              document.getElementById('greskaEmail').innerHTML='';
              document.getElementById('greskaEmail').classList.remove('dodaj');
              document.getElementById('email').style.borderBottom ='3px solid gray';
          }
        }

        function telefon(){
          var telefon= document.getElementById('telefon').value.trim();
            var REGtelefon = /^(06[0-9]|\+3816[0-9])\-[\d]{3}\-[\d]{3,4}$/;
           if(!validno(REGtelefon, telefon)){
            document.getElementById('greskaBroj').innerHTML='Polje za telefon nije u dobrom formatu!';
            document.getElementById('greskaBroj').classList.add('dodaj');
            document.getElementById('telefon').style.borderBottom ='3px solid red';
            }
            else {
                document.getElementById('greskaBroj').innerHTML='';
                document.getElementById('greskaBroj').classList.remove('dodaj');
                document.getElementById('telefon').style.borderBottom ='3px solid gray';
            }
        }

        function poruka(){
          var poruka = document.getElementById('poruka').value.trim();
          var REGporuka = /^[A-zžđščć\s\/\-\_\+\@\,\.\'\"\%\d]{15,60}$/;
          if(!validno(REGporuka, poruka)){
            document.getElementById('greskaPoruke').innerHTML='Poruka je ograničena,mora sadržati min 15,a max 50 karaktera!';
            document.getElementById('greskaPoruke').classList.add('dodaj');
            document.getElementById('poruka').style.borderBottom ='3px solid red';
          }
          else {
              document.getElementById('greskaPoruke').innerHTML='';
              document.getElementById('greskaPoruke').classList.remove('dodaj');
              document.getElementById('poruka').style.borderBottom ='3px solid gray';
          }
        }

        function zbogCega(){
          var zbogCega = document.getElementsByName('imeRadio');
          var brojac=0;
            for(let vrednost of zbogCega){
                if(vrednost.checked){  
                    brojac++;
                }
            }
            if(brojac==0){
                document.getElementById('zvezda').innerHTML= 'Niste označili zbog čega nas kontaktirate!';
                document.getElementById('zvezda').classList.add('dodaj');
            }
           else if(brojac==1){
                document.getElementById('zvezda').innerHTML= '';
                    document.getElementById('zvezda').classList.remove('dodaj');
            }
        }

        function grad(){
          var grad = document.getElementById('gradovi').value;
          if(grad=='0'){   
            document.getElementById('grad').innerHTML='Niste odabrali grad!';
            document.getElementById('grad').classList.add('dodaj');
          }
          else {
              document.getElementById('grad').innerHTML='';
              document.getElementById('grad').classList.remove('dodaj');
          }
        }

        function saglasnost(){
          var saglasnost = document.querySelector('#saglasnost');
          if(!(saglasnost.checked)){  
            document.getElementById('agree').innerHTML='Niste dali saglasnost!';
            document.getElementById('agree').classList.add('dodaj');
          }
          else {
              document.getElementById('agree').innerHTML='';
              document.getElementById('agree').classList.remove('dodaj');
          }
        }
        function provera(e){
          e.preventDefault()
          saglasnost()
          poruka()
          grad()
          zbogCega()
          telefon()
          email()
          imePrezime()
        }

        //dinamicko ispisivanje 

        var PrviNizGradovi=['za Beograd','za Niš','za Novi Sad','za Kragujevac'];
        var DrugiNizGradovi=[
          ['011-222-3333','autoServis-StoleBG@gmail.com','Tošin bunar br.46'],
          ['015-222-3333','autoServis-StoleNI@gmail.com','Slavkov bunar br.46'],
          ['013-555-4444','autoServis-StoleNS@gmail.com','Bratkov bunar br.46'],
          ['017-555-4444','autoServis-StoleKG@gmail.com','Matkov bunar br.4']
        ];
        function PrviNivoUlTaga(){
          var ispis2='<ul>';
          var i=0;
          for(vrednost of DrugiNizGradovi[i]){
            ispis2+=`<li>${vrednost}</li>`;
            i++;
          }
          ispis2+='</ul>'
          let ispis='<ul id="ekspander">';
          for(vrednost of PrviNizGradovi){
            ispis+=`<li>${vrednost}${ispis2}</li>`;
          }
          ispis+='</ul>'
          return ispis;
        }
        

       document.getElementById("celebs").innerHTML+=PrviNivoUlTaga();
        //kontakt ekspander
        $('#info ul > li ul')
        .click(function(e){
            e.stopPropagation();
        })
        .filter(':not(:first)')
        .hide();
        
        $('#info ul > li').click(function(){
        var tekuciPokazivac = $(this).find('ul:first').is(':visible');
        if(!tekuciPokazivac) {
            $(this)
            .parent()
            .find('> li ul:visible')
            .slideToggle();
        }
        
        $(this)
            .find('ul:first')
            .stop(true, true)
            .slideToggle();
        });
        //end kontakExpander       
     
});



