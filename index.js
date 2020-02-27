$(document).ready(function(){
    $('.start').click(function(){
        $(this).hide();
        $('.info p').hide();
        $('.collection p').css('display','flex');
    });
    $('.start').click(function(){
    var  ball = document.getElementById('ball1'),
         ball1 = document.getElementById('ball2'),
         ball2 = document.getElementById('ball3'),
         ball3 = document.getElementById('ball4'),
         ball4 = document.getElementById('ball5'),
         ball5 = document.getElementById('ball6'),
     balls =  ['<div class="balla1" style="background-color:red;" onclick="balla()">JS</div>','<div class="ballb">ANGULAR</div>','<div class="ballc">REACT</div>','<div class="balld">HTML</div>'];
     balls2 = ['<div class="ballb">ANGULAR</div>','<div class="balla2" style="background-color:red;" onclick="ballb()">JS</div>','<div class="balld">HTML</div>','<div class="ballc">REACT</div>',];
     balls3 = ['<div class="balla3" style="background-color:red;" onclick="ballc()">JS</div>','<div class="ballb">ANGULAR</div>','<div class="balld">HTML</div>','<div class="ballc">REACT</div>',];
     balls4 = ['<div class="ballb">ANGULAR</div>','<div class="balld">HTML</div>','<div class="balla4" style="background-color:red;" onclick="balld()">JS</div>','<div class="ballc">REACT</div>',];
     balls5 = ['<div class="ballc">REACT</div>','<div class="ballb">ANGULAR</div>','<div class="balla5" style="background-color:red;" onclick="balle()">JS</div>','<div class="balld">HTML</div>',];
     balls6 = ['<div class="balld">HTML</div>','<div class="ballb">ANGULAR</div>','<div class="balla6" style="background-color:red;" onclick="ballf()">JS</div>','<div class="ballc">REACT</div>',];
function change(ball,ball1,ball2,ball3,ball4,ball5,balls,balls2,balls3,balls4,balls5){
    'use strict';
    setInterval(function() {
    var myRandomNum = Math.floor(Math.random() * balls.length);
    var myRandomNum2 = Math.floor(Math.random() * balls2.length);
    var myRandomNum3 = Math.floor(Math.random() * balls3.length);
    var myRandomNum4 = Math.floor(Math.random() * balls4.length);
    var myRandomNum5 = Math.floor(Math.random() * balls5.length);
    var myRandomNum6 = Math.floor(Math.random() * balls6.length);
    document.getElementById('ball1').innerHTML= balls[myRandomNum];
    document.getElementById('ball2').innerHTML= balls2[myRandomNum2];
    document.getElementById('ball3').innerHTML= balls3[myRandomNum3];
    document.getElementById('ball4').innerHTML= balls4[myRandomNum4];
    document.getElementById('ball5').innerHTML= balls5[myRandomNum5];
    document.getElementById('ball6').innerHTML= balls6[myRandomNum6];
    },3000);
    };
    change(ball,ball1,ball2,ball3,ball4,ball5,balls,balls2,balls3,balls4,balls5);
    });
});
var i = 0;
var x=5
function balla(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla1" ).toggle( "explode" );
    if(i===x){
        $('.balls').hide();
        $('.collection').hide();
        $('.finish').show();
        $("#particles-js").show();
    };
   };
   function ballb(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla2" ).toggle( "explode" );
    if(i===x){
        $('.balls').remove();
        $('.collection').hide();
        $('.finish').show();
    };
   };
   function ballc(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla3" ).toggle( "explode" );
    if(i===x){
        $('.balls').remove();
        $('.collection').hide();
        $('.finish').show();
    };
   };
   function balld(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla4" ).toggle( "explode" );
    if(i===x){
        $('.balls').remove();
        $('.collection').hide();
        $('.finish').show();
    };
   };
   function balle(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla5" ).toggle( "explode" );
    if(i===x){
        $('.balls').remove();
        $('.collection').hide();
        $('.finish').show();
    };
   };
   function ballf(){
    i++;
    document.getElementById('scoreofpoints').innerHTML= i ;
    $( ".balla6" ).toggle( "explode" );
    if(i===x){
        $('.balls').remove();
        $('.collection').hide();
        $('.finish').show();
    };
   };