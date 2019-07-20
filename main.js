var output =document.getElementById('output');
var response = null;
window.onload = init;

function init(){
    loadJSON(function(res){
       output.innerHTML = build(res);
    });
}

function loadJSON(callback){
    var xHR =new XMLHttpRequest;
    xHR.open('GET', 'https://restcountries.eu/rest/v2/all' , true);
    xHR.onreadystatechange = function(){
        if(xHR.readyState == 4 && xHR.status == 200){
            response = JSON.parse(xHR.response);
            callback(response);
        }
    }
        xHR.send();
}

var n = [] ;


function build(r){
    var html = "" ;
    var ran = Math.floor(Math.random() * r.length);
    n = r[ran].name;
    var card = n.split('');
    // for (var i=0; i<n.length; i++)
    // {
    //     card[i]=n[i];
    // }
    shuffle(card);
    
    var myImage = new Image() ;
    var ImgSrc = r[ran].flag;
    myImage.setAttribute("src" , ImgSrc);
    myImage.style.position = "absolute";
    var x = 160 ;
    var y = 150;
    myImage.style.left = x + "px";
    myImage.style.top = y + "px";
    var h = 150;
    var w = 150;
    myImage.style.height = h + "px";
    myImage.style.width = w + "px";
    document.body.appendChild(myImage);

    document.getElementById("nc") . innerHTML = card.join('');
    return html;
}

function shuffle(array){
    for(var i = array.length - 1 ; i > 0 ; i--){
        var random = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[random];
        array[random] = temp;
    }
    return array;
}

// button new country
function refresh(){
    window.location.href = window.location.href;
}

// 
 function compare(){
    var input = document.getElementById('inpcon').value;
    var c = [];
     for (var i = 0 ; i < n.length ; i ++){
        
         if (input [i] == n [i]) {
            c [i] = input [i];
         }

         else{
             c [i] = '_ ';
         }
     }
     document.getElementById("out") . innerHTML = c.join('');

 }
 