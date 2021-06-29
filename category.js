// variable
// Navigation var
var navopenBtn = document.querySelector(".open")
var navbtns= document.querySelector(".navBtns");

// pages
    // home
var homeBtn= document.querySelector(".home"),

    // category
    category= document.querySelector(".category"),
    
    // Product
    order= document.querySelector(".order"),

    //About
    About= document.querySelector(".about");


// Event listners

// For contect Button
navopenBtn.addEventListener("click", function(){
   
    function navopen(){
        navopenBtn.innerHTML="≡"
    }
    
    if (navopenBtn.innerHTML==="→" & navbtns.style.display === "flex"){
        navbtns.style.display = "none";
        
        navopen();
    }else {
        navbtns.style.display = "flex";
        navopenBtn.innerHTML = "→";
    };
});

// Linking pages
//Home
Pagelinking(homeBtn, "index.html");
//category
Pagelinking(category, "category.html");
//Product
Pagelinking(order, "index.html");
// About
Pagelinking(About, "index.html");


//Ended




                // body
    //section 1
// variables
var sectionI = document.querySelector(".sectionI");

    //slideShow
//Event Listner
var slide=1;
setInterval(function (){
    slide++
    if(slide===1){
        sectionI.style.color= "white";
        sectionI.style.backgroundImage= "url('picture/car/back1.jpeg')"
    }
    else if(slide===2){
        sectionI.style.backgroundImage= "url('picture/car/back2.jpeg')"
    }
    else if(slide===3){
        sectionI.style.backgroundImage= "url('picture/car/back3.jpeg')"
    }
    else if(slide===4){
        sectionI.style.color= "black";

        sectionI.style.backgroundImage= "url('picture/car/back4.jpeg')"
    }
    else if(slide===5){
        sectionI.style.color= "white";

        sectionI.style.backgroundImage= "url('picture/car/back5.jpeg')"
    }
    else if(slide===6){
        sectionI.style.color= "black";

        sectionI.style.backgroundImage= "url('picture/car/back6.jpeg')"
    }
    else if(slide===7){
        sectionI.style.color= "black";

        sectionI.style.backgroundImage= "url('picture/car/back7.jpeg')"
    }
    else if(slide===8){
        sectionI.style.backgroundImage= "url('picture/car/back8.jpeg')"
    }else{
        slide=0
    };
},4000)
//section I end

    

        // section II
    //Variables
// divs
var Sportdiv = document.querySelector(".sport"),    //Sport category div
    
    sedandiv = document.querySelector(".Sedans"),   //Sedan category div

    SUVdiv = document.querySelector(".suv"),        //SUV Category div

    pickupDiv = document.querySelector(".Pickup"),  //Pickup category div

    convertibleDiv = document.querySelector(".convertible"),//Convertible category div

    vanDiv = document.querySelector(".Van"),        //van div

    truckDiv = document.querySelector(".Truck"),     //truck div

    bikesDiv = document.querySelector(".bikes"),     //bikes div

    newCar = document.querySelector(".newCar"),   //bikes div

    usedCar = document.querySelector(".usedCar"),   //Used car div

    roadstarDiv = document.querySelector(".Roadstar"),//Roadstar category div
    // Button
    sportBtn = document.querySelector(".sportBtn"), //Sport Btn Category

    sedanBtn = document.querySelector(".sedanbtn"), //Sedan Btn

    suvBtn =  document.querySelector(".suvBtn"),    //Suv btn Category

    roadstarBtn = document.querySelector(".roadstarbtn"),// Roadstar btn

    convertibleBtn = document.querySelector(".convertiblebtn"),// convertible btn

    vanbtn = document.querySelector(".vanbtn"),     //van btn
    
    truckBtn = document.querySelector(".truckBtn"), //truck btn

    bikesBtn = document.querySelector(".bikes"),    //Bikes btn

    newCarBtn = document.querySelector(".newCarBtn"),//new car btn

    usedCarBtn = document.querySelector(".usedCarBtn"),//Used Car Btn

    pickupBtn = document.querySelector(".Pickupbtn"); //Pickup btn

        //Adding The Styles function
    //SUV style
CatStyle(SUVdiv, "white", "url('picture/car/suv.jfif')");

    //Sedan style
CatStyle(sedandiv, "black", "url('picture/car/sedan.jfif')")

    //Pickup Style
CatStyle(pickupDiv, "white", "url('picture/car/pickup.jfif')")

    //Roadstar style
CatStyle(roadstarDiv, "white", "url('picture/car/roadstar.jfif')")
   
    //Convertible style
CatStyle(convertibleDiv, "red", "url('picture/car/convertible.jfif')")

    //Van
CatStyle(vanDiv, "white", "url('picture/car/van.jpg')")

    //Truck
CatStyle(truckDiv, "black", "url('picture/car/big truck.jpg')")

    //Bikes
CatStyle(bikesDiv, "white", "url('picture/car/bike.jpg')")
        
    //new car
CatStyle(newCar, "white", "url('picture/car/newcar.jpg')")

    //used car
CatStyle(usedCar, "white", "url('picture/car/usedcar.jfif')")
//Body Ends Here





//footer bar





// Functions

// Pagelinking function
function Pagelinking(ad,b){

    ad.addEventListener ("click" , function (){
        window.location.href= b

    });
};

//calculator function
function calc(btn, input, price, outputer){
    btn.addEventListener("click",function(){
        var c=input.value;
        if (c<37 & c!=0 & c>0){
            var solve= c*price;
            outputer.innerHTML= "The price is ₦"+solve;
            c.innerHTML="";
            outputer.style.color= "green";
            c.innerHTML="";
    
        }
        else if(c<=0){
            outputer.innerHTML="There is no State Assigned";
            c.innerHTML="";
            outputer.style.color= "red";
        }
        else if(c>36){
            outputer.style.color= "red";
            c.innerHTML="";
            outputer.innerHTML= "This is more than the states in Nigeria";
        }else{
            outputer.style.color= "red";
            c.innerHTML="";
            outputer.innerHTML="You have an unkown input";
        };
    });
    
    
}

//slideshow function
function slide(image_one, image_two ){
    var a = 0;
    console.log(4%2);
    setInterval(function(){
      if(a%2===0){
        image_one.style.display= "none";
        image_two.style.display= "unset";
      }else{
        image_one.style.display= "unset";
        
        image_two.style.display= "None";
    
      };
      if(a==20){
        a=0;
      };
      a++
        console.log(a);
    },4000);
};

// Category styles function

function CatStyle(divname, color, imageURL){
    //This is for the div
    divname.style.width= "95%"
    divname.style.color= color;
    divname.style.border= "solid black 3px";
    divname.style.borderRadius= "30px";
    divname.style.fontWeight= "bolder";
    divname.style.fontSize= "120%";
    divname.style.backgroundSize= "cover";
    divname.style.backgroundPosition= "center";
    divname.style.backgroundImage= imageURL;
    divname.style.display= "flex";
    divname.style.flexDirection= "column";
    divname.style.alignItems= "center";
    divname.style.justifyContent= "center";
    // /* text-align: center; */
    divname.style.height= "8.5%";

};