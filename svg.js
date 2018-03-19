//Team AtomicSVG (Shaina Peters && Michael Ruvinshteyn)
//SoftDev2 pd07
//K12 -- Medallions ...of Data!
//2018 - 03 - 19

var svg = document.getElementById("vimage");

//dictionary containing the countries with their respective medal counts
//medals are arranged in an array as follows: [gold,silver,bronze]
var medals = {
    "norway":[14,14,11],
    "germany":[14,10,7],
    "canada":[11,8,10],
    "usa":[9,8,6],
    "netherlands":[8,6,6],
    "southkorea":[5,8,4],
    "russia":[2,6,9],
    "switzerland":[5,6,4],
    "france":[5,4,6],
    "sweden":[7,6,1],
    "austria":[5,3,6],
    "japan":[4,5,4],
    "italy":[3,2,5],
    "china":[1,6,2],
    "czech":[2,2,3],
    "finland":[1,1,4],
    "britain":[1,0,4],
    "belarus":[2,1,0],
    "slovakia":[1,2,0],
    "australia":[0,2,1],
    "poland":[1,0,1],
    "slovenia":[0,1,1],
    "spain":[0,0,2],
    "newzealand":[0,0,2],
    "hungary":[1,0,0],
    "ukraine":[1,0,0],
    "belgium":[0,1,0],
    "kazakhstan":[0,0,1],
    "latvia":[0,0,1],
    "liechtenstein":[0,0,1]
}

//facilitate changing the current country being shown
var country = document.getElementById("country").value;
var changeCountry = function(){
    country = document.getElementById("country").value;
    display();
}
document.getElementById("changeCountry").addEventListener("click",changeCountry);

//facilitate displaying medals on SVG
var display = function(){
    svg.innerHTML = ""; //clear SVG before drawing "medals"
    
    //medal adding procedure:
    //1. obtain medal count - store in variable
    //2. calculate radius based on ratio of medal count to 14
        //Note: the most bronze medals obtained was 11 by Norway, so bronze will never be at max radius
    //3. add circle with appropriate radius, fill, and x-coord; everything else stays constant
    //4. add text in circle indicating medal count associated with the circle
    
    //draw gold circle based on gold medal count
    var gold = medals[country][0];
    var goldRadius = Math.round(100 * (gold / 14));
    svg.innerHTML += "<circle cx=250 cy=250 r=" + goldRadius + " fill=\"#ffd700\">"
    svg.innerHTML += "<text x=250 y=250 text-anchor=\"middle\" fill=\"white\" font-family=\"Arial\" font-size=" + goldRadius + " dy=" + goldRadius / 3 + ">" + gold + "</text>";
    
    //draw silver circle based on silver medal count
    var silver = medals[country][1];
    var silverRadius = Math.round(100 * (silver / 14));
    svg.innerHTML += "<circle cx=500 cy=250 r=" + silverRadius + " fill=\"#c0c0c0\">"
    svg.innerHTML += "<text x=500 y=250 text-anchor=\"middle\" fill=\"white\" font-family=\"Arial\" font-size=" + silverRadius + " dy=" + silverRadius / 3 + ">" + silver + "</text>";
    
    //draw bronze circle based on bronze medal count
    var bronze = medals[country][2];
    var bronzeRadius = Math.round(100 * (bronze / 14));
    svg.innerHTML += "<circle cx=750 cy=250 r=" + bronzeRadius + " fill=\"#cd7f32\">"
    svg.innerHTML += "<text x=750 y=250 text-anchor=\"middle\" fill=\"white\" font-family=\"Arial\" font-size=" + bronzeRadius + " dy=" + bronzeRadius / 3 + ">" + bronze + "</text>";
}