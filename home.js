// variable
//localStorage
var FullName = window.localStorage.getItem("fullname");

// Navigation var
var navopenBtn = document.querySelector(".open")
var navbtns= document.querySelector(".navBtns");
var WelcomeLine= document.querySelector(".welcome");

// console.log(localStorage.getItem("Orders"));
// pages
    // home
var homeBtn= document.querySelector(".home"),

    // category
    category= document.querySelector(".category"),
    
    // Product
    Order= document.querySelector(".order"),

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
console.log("amaka");
//Home
Pagelinking(homeBtn, "index.html");
//category
Pagelinking(category, "category.html");
//Product
Pagelinking(Order, "Order.html");
// About
Pagelinking(About, "About.html");


//Local Storage
if (window.localStorage.getItem("fullname")===null || window.localStorage.getItem("fullname")==="null" || window.localStorage.getItem("fullname")===""){
    console.log("Unknown Account");
} else {
    WelcomeLine.innerHTML= "Welcome "+ String(FullName);

    
}


//Ended




                // body
    //section 1
// variables
var loginbtn= document.querySelector(".login"),
    signupbtn= document.querySelector(".signup");

//button function
Pagelinking(loginbtn, "Login.html")
Pagelinking(signupbtn, "signin.html")

    //Section 2
// variables
var imgI= document.querySelector(".linearI"),       //sliding image one
    imgII= document.querySelector(".linearII"),      //sliding image two

    diaIMGI= document.querySelector(".diamondI"),     //Diamond Image one
    diaIMGII= document.querySelector(".diamondII"),     //Diamond Image two

    GoldIMGI= document.querySelector(".GoldI"),     //Gold Image one
    GoldIMGII= document.querySelector(".GoldII"),     //Gold Image two

    //inputs
    linInput= document.querySelector(".linearCalc"), //linear input
    
    DiaInput= document.querySelector(".DiamondCalc"), //Diamond input

    GoldInput= document.querySelector(".GoldCalc"), //Gold input
 
    //buttons
    linBtn= document.querySelector(".buttonLin"),     //linear button

    DiaBtn= document.querySelector(".buttonDia"),     //Diamond button

    GoldBtn= document.querySelector(".buttonGold"),     //Gold button


    //Outputer
    linOut= document.querySelector(".linearPrice"),  //linear output price
    
    DiaOut= document.querySelector(".DiamondPrice"),  //Diamond output price
     
    GoldOut= document.querySelector(".GoldPrice");  //Gold output price


    //Linear Method1
//Slide show
var a= 0;
console.log(4%2);
setInterval(function(){
  if(a%2===0){
    imgI.style.display= "none";
    imgII.style.display= "unset";
  }else{
    imgI.style.display= "unset";
    
    imgII.style.display= "None";

  };
  if(a==20){
      a=0;
  };
    a++
    console.log(a);
},4000);

//Calculation
linBtn.addEventListener("click",function(){
    var x=linInput.value;
    if (x<36 & x!=0 & x>0){
        var solve= x*3000;
        linOut.innerHTML= "The price is ₦"+solve;
        x.innerHTML="";
        linOut.style.color= "green";
        x.innerHTML="";

    }
    else if(x<=0){
        linOut.innerHTML="There is no State Assigned";
        x.innerHTML="";
        linOut.style.color= "red";
    }
    else if(x>36){
        linOut.style.color= "red";
        x.innerHTML="";
        linOut.innerHTML= "This is more than the states in Nigeria";
    }else{
        linOut.style.color= "red";
        x.innerHTML="";
        linOut.innerHTML="You have an unkown input";
    };
});


        //Method 2 
    //Slideshow
slide(diaIMGI,diaIMGII);
    //calculation
calc(DiaBtn, DiaInput, 2500, DiaOut);


        //Method 3
    //Slide show
slide(GoldIMGI ,GoldIMGII);
    //Calculation
calc(GoldBtn, GoldInput, 25000, GoldOut);

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
}



// var nm ="soludo" ;


// firebaseDatabase databxtom = Firebase.getInstance("www.tombraDatabase.com")


// ////signup pag
// databxtom.child("0702346754").child("profile").child("username").setValue("soludo")
// databxtom.child("0702346754").child("profile").child("password").setValue("soludox1234")


// databxtom.child("0702346754").child("followers").child("0813247362").setValue("daniel")
// databxtom.child("0702346754").child("followers").child("0983283729").setValue("tombra")

// //////////log in

// var passwd = databxtom.child("0702346754").child("profile").child("password").getValue();
// var usernm = databxtom.child("0702346754").child("profile").child("username").getValue();

// if(usernm.exists()){



//     if(passwd == "value in textbox"){

// //login

//     }



// }



// ///inside the app






