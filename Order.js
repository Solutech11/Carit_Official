// variable
//localStorage
var FullNamelocal = window.localStorage.getItem("fullname");

// Navigation var
var navopenBtn = document.querySelector(".open")
var navbtns= document.querySelector(".navBtns");
var WelcomeLine= document.querySelector(".welcome");

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
Pagelinking(order, "Order.html");
// About
Pagelinking(About, "About.html");


window.localStorage.setItem("order" , "false")
//Local Storage
// getItem
var CarId= String(window.localStorage.getItem("Id")),
    url = String(window.localStorage.getItem("orderImg")),
    OrderName= String(window.localStorage.getItem("orderName")),
    OrderPrice= String(window.localStorage.getItem("OrderPrice")),
    address= String(window.localStorage.getItem("Address"));

if(CarId!=""& CarId!=null & CarId!="null"){
    window.localStorage.setItem("order", "True")
}else{
    window.localStorage.setItem("order", "false")
}

if (window.localStorage.getItem("fullname")===null || window.localStorage.getItem("fullname")==="null" || window.localStorage.getItem("fullname")===""){
    console.log("Unknown Account");
} else {
    WelcomeLine.innerHTML= "Welcome "+ String(FullNamelocal);  
};

//Ended




        //order body
//variable
var orderList= document.querySelector(".orderList"),
    image =document.querySelector(".image"),
    carname = document.querySelector(".nameCar"),
    IdNumb =document.querySelector(".idNumber"),
    price = document.querySelector(".price"),
    addressCar= document.querySelector(".address");
    // contacts =document.querySelector(".contacts");
// console.log(CarId);
if(CarId!=""){
    orderList.style.display="inherit";
    image.style.backgroundImage = url;
    carname.innerHTML= OrderName;
    IdNumb.innerHTML = CarId;
    price.innerHTML = "₦"+OrderPrice;
    addressCar.innerHTML = address;
}
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

