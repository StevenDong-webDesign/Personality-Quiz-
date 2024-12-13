let headingInfo = $("#heading").text();
console.log(headingInfo);

let questionOne = $("#buttonFR").hide();
$("#buttonJP").hide();
$("#buttonUS").hide();
$("#buttonPT").hide();

$("#buttonStart").on("click", function() {
    console.log("clicked #buttonStart");     
    $("#buttonStart").fadeOut();
});
$("#buttonStart").on("click", scene1);


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

let points = 0;
console.log(points);

$("#endingFR").hide();
$("#endingJP").hide();
$("#endingUS").hide();
$("#endingPT").hide();

$("#buttonFR").on("click", add1Point);

$("#buttonJP").on("click", add2Point);

$("#buttonUS").on("click", add3Point);

$("#buttonPT").on("click", add4Point);

function add1Point(){
    points++;
    console.log(points);
}
function add2Point(){
    points+=2;
    console.log(points);
}
function add3Point(){
    points+=3;
    console.log(points);
}
function add4Point(){
    points+=4;
    console.log(points);
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


function scene1() {
    console.log("scene1");
    $("#buttonFR").fadeIn();
    $("#buttonJP").fadeIn();
    $("#buttonUS").fadeIn();
    $("#buttonPT").fadeIn();
    
    $("#heading").html("Where would you like to visit?");
    $("#buttonFR").on("click", scene2);
    $("#buttonJP").on("click", scene2);
    $("#buttonUS").on("click", scene2);
    $("#buttonPT").on("click", scene2);
    
    
}

function scene2() {
    $("#heading").text("What Era would you like to live  through?");
    $("#buttonFR").on("click", scene3);
    $("#buttonJP").on("click", scene3);
    $("#buttonUS").on("click", scene3);
    $("#buttonPT").on("click", scene3);
    
    $("#textFR").text("Revolution");    
    $("#textJP").text("Meiji Period");
    $("#textUS").text("The Gold Rush");
    $("#textPT").text("Renaissance");
    
    $("#imgFR").attr("src", "questionImages/fr_revolution.jpg");
    $("#imgJP").attr("src", "questionImages/jp_meiji.jpeg");
    $("#imgUS").attr("src", "questionImages/us_goldrush.jpeg");
    $("#imgPT").attr("src", "questionImages/pt_renaissance.webp");

    
}

function scene3() {
    $("#heading").text("Select a profession you like.");
    $("#buttonFR").on("click", scene4);
    $("#buttonJP").on("click", scene4);
    $("#buttonUS").on("click", scene4);
    $("#buttonPT").on("click", scene4);
    
    $("#textFR").text("Policemen");
    $("#textJP").text("Chef");
    $("#textUS").text("Miner");
    $("#textPT").text("Spanish Inquisition");
    
    $("#imgFR").attr("src", "questionImages/fr_policemen.jpeg");
    $("#imgJP").attr("src", "questionImages/jp_chef.jpeg");
    $("#imgUS").attr("src", "questionImages/us_miner.png");
    $("#imgPT").attr("src", "questionImages/pt_inquisition.webp");
}

function scene4() {
    $("#heading").text("Which of these elements do you like?");
    $("#buttonFR").on("click", scene5);
    $("#buttonJP").on("click", scene5);
    $("#buttonUS").on("click", scene5);
    $("#buttonPT").on("click", scene5);
    
    $("#textFR").text("Wood");
    $("#textJP").text("Steel");
    $("#textUS").text("Gold");
    $("#textPT").text("Sponge");
    
    $("#imgFR").attr("src", "questionImages/fr_woodbar2.webp");
    $("#imgJP").attr("src", "questionImages/jp_steelbar.png");
    $("#imgUS").attr("src", "questionImages/us_goldbar.png");
    $("#imgPT").attr("src", "questionImages/pt_spongebar.webp");    
}

function scene5() {
    $("#heading").text("Which of these flavor do you like?");
    $("#buttonFR").on("click", scene6);
    $("#buttonJP").on("click", scene6);
    $("#buttonUS").on("click", scene6);
    $("#buttonPT").on("click", scene6); 
    
    $("#textFR").text("Salt");
    $("#textJP").text("Red Bean Paste");
    $("#textUS").text("Banana");
    $("#textPT").text("Lemon");   
    
    $("#imgFR").attr("src", "questionImages/fr_salt.webp");
    $("#imgJP").attr("src", "questionImages/jp_beanpaste.jpeg");
    $("#imgUS").attr("src", "questionImages/us_banana.webp");
    $("#imgPT").attr("src", "questionImages/pt_lemon.jpeg");    
}

function scene6() {
    $("#heading").text("What is another location would you like to visit?");
    $("#buttonFR").on("click", scene7);
    $("#buttonJP").on("click", scene7);
    $("#buttonUS").on("click", scene7);
    $("#buttonPT").on("click", scene7);
    
    $("#textFR").text("Austria");
    $("#textJP").text("Africa");
    $("#textUS").text("Philippines");
    $("#textPT").text("Hawaii"); 
    
    $("#imgFR").attr("src", "questionImages/fr_austria.jpeg");
    $("#imgJP").attr("src", "questionImages/jp_africa.webp");
    $("#imgUS").attr("src", "questionImages/us_philippines.jpeg");
    $("#imgPT").attr("src", "questionImages/pt_hawaii.jpeg");    
}

function scene7() {
    $("#heading").text("Which of these animals do you like?");
    $("#buttonFR").on("click", scene8);
    $("#buttonJP").on("click", scene8);
    $("#buttonUS").on("click", scene8);
    $("#buttonPT").on("click", scene8); 
    
    $("#textFR").text("Rooster");
    $("#textJP").text("Green Pheasant");
    $("#textUS").text("Bald Eagle");
    $("#textPT").text("Iberian Wolf");   
    
    $("#imgFR").attr("src", "questionImages/fr_rooster.webp");
    $("#imgJP").attr("src", "questionImages/jp_greenbird.jpeg");
    $("#imgUS").attr("src", "questionImages/us_baldeagle.jpeg");
    $("#imgPT").attr("src", "questionImages/pt_wolf.webp");    
}

function scene8() {
    $("#heading").text("Which of these trees do you like?");
    $("#buttonFR").on("click", scene9);
    $("#buttonJP").on("click", scene9);
    $("#buttonUS").on("click", scene9);
    $("#buttonPT").on("click", scene9); 
    
    $("#textFR").text("Yew Tree");
    $("#textJP").text("Sugi Tree");
    $("#textUS").text("Oak Tree");
    $("#textPT").text("Cork Oak Tree"); 
    
    $("#imgFR").attr("src", "questionImages/fr_yewtree.webp");
    $("#imgJP").attr("src", "questionImages/jp_sugitree.jpeg");
    $("#imgUS").attr("src", "questionImages/us_oaktree.webp");
    $("#imgPT").attr("src", "questionImages/pt_corkoak.webp");    
}

function scene9() {
    $("#heading").text("What is your favorite holiday out of the choices show?");
    $("#buttonFR").on("click", scene10);
    $("#buttonJP").on("click", scene10);
    $("#buttonUS").on("click", scene10);
    $("#buttonPT").on("click", scene10); 

    $("#textFR").text("Bastille Day");
    $("#textJP").text("New Year's Day");
    $("#textUS").text("Chrismas");
    $("#textPT").text("Easter");   
    
    $("#imgFR").attr("src", "questionImages/fr_bastille.jpeg");
    $("#imgJP").attr("src", "questionImages/jp_newyear.jpeg");
    $("#imgUS").attr("src", "questionImages/us_christmas.jpeg");
    $("#imgPT").attr("src", "questionImages/pt_easter.jpeg");    
}

function scene10() {
    $("#heading").text("idk i ran out of ideas");
    $("#buttonFR").on("click", sceneEnd);
    $("#buttonJP").on("click", sceneEnd);
    $("#buttonUS").on("click", sceneEnd);
    $("#buttonPT").on("click", sceneEnd); 
    
    $("#textFR").text("¯\_(ツ)_/¯");
    $("#textJP").text("¯\_(ツ)_/¯");
    $("#textUS").text("¯\_(ツ)_/¯");
    $("#textPT").text("¯\_(ツ)_/¯");  
    
    $("#imgFR").attr("src", "face_bread.png");
    $("#imgJP").attr("src", "just_bread.png");
    $("#imgUS").attr("src", "many_bread.png");
    $("#imgPT").attr("src", "scam_bread.png");    
}

let sceneEnd = function(){
    $("#heading").text("end");
    $("#buttonFR").hide();
    $("#buttonJP").hide();
    $("#buttonUS").hide();
    $("#buttonPT").hide();

    if (points <= 10){
            $("#endingFR").show();
        } else if (points <= 20){
            $("#endingJP").show();
        } else if (points <= 30){
            $("#endingUS").show();
        } else if (points <= 40){
            $("#endingPT").show();
        }
    };






