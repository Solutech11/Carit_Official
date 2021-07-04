// variable

// pages
                // body

    //Variables
//cardiv
var carOne = document.querySelector(".onebtn"),
    carTwo = document.querySelector(".twobtn"),
    carThree = document.querySelector(".threebtn"),
    carFour = document.querySelector(".fourbtn"),
    carFive = document.querySelector(".fivebtn");
    var backBTN= document.querySelector(".backbtn");

    var orderBtn= document.querySelector(".orderbtn")

Pagelinking(orderBtn, "Order.html");
Pagelinking(backBTN, "category.html");

        //car order
carOrder(carOne, 1, "picture/Used cars/1bod1.png", "2011 RAV 4", "3,050,000");
carOrder(carTwo, 2, "picture/Used cars/2bod1.png", "2003 Nissan Quest", "800,000");
carOrder(carThree,3,"picture/Used cars/3bod1.png", "2014 Honda Pilot", "3,710,000");
carOrder(carFour, 4, "picture/Used cars/4bod1.png", "2010 Pointiac Vibe", "3,020,000" );
carOrder(carFive, 5, "picture/Used cars/5bod1.png", "2004 Golf 3","600,000");


    //Body Ends Here


        //local storage
var Fullnamelocal= localStorage.getItem("fullname"),
    address= window.localStorage.getItem("Address");

    // console.log(String(Fullnamelocal));
//footer bar





// Functions
//local storage producer

function signup(key, value){
    localStorage.setItem(key, value)
}
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


//car ordering
function carOrder(a, idNum, ImageUrl, OrderName, Orderprice){
    a.addEventListener("click", function(){
        // if (String(localStorage.getItem("order")) === "false"){
            localStorage.setItem("Id", idNum);
            localStorage.setItem("orderImg", ImageUrl);
            localStorage.setItem("orderName", OrderName);
            localStorage.setItem("OrderPrice", Orderprice);
            // localStorage.setItem("");
           window.location.href= "payment.html"
        // }else{
            // alert("You have made an order Already. Now click back to go order ");
        // }
    })
}