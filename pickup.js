2// variable
// pages
   


                // body

    //Variables
//cardiv
var carOne = document.querySelector(".onebtn"),
    carTwo = document.querySelector(".twobtn"),
    carThree = document.querySelector(".threebtn"),
   
    var backBTN= document.querySelector(".backbtn");

    var orderBtn= document.querySelector(".orderbtn")

Pagelinking(orderBtn, "Order.html");
Pagelinking(backBTN, "category.html");

        //car order
carOrder(carOne, 22, "picture/pickup/1bod1.png", "Ram 1500", "36,050,000");
carOrder(carTwo, 23, "picture/pickup/2bod1.png", "2021 Ford F150", "33,800,000");
carOrder(carThree, 24,"picture/pickup/3bod1.png", "2014 G-class 6x6", "1,230,710,000");



  //local storage
  var Fullnamelocal= localStorage.getItem("fullname"),
  address= window.localStorage.getItem("Address");

//     //page Linking
// Pagelinking(carOne,"guza.html");
// Pagelinking(carTwo,"#");
// Pagelinking(carThree,"#");
// Pagelinking(carFour,"#");
// Pagelinking(carFive,"#");



    //Body Ends Here




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
            // alert("Mr."+ String(Fullnamelocal) + " your " + String(window.localStorage.getItem("orderName")) +" will be delivered to " + address)
            window.location.href= "payment.html"
        // }else{
            // alert("You have made an order Already. Now click back to go order ");
        // }
    })
}