// variable
// pages
   


                // body
        // variables

        var fullname= document.querySelector(".name"),
        email= document.querySelector(".email"),
        password= document.querySelector(".password");


    // buttons
var backBTN= document.querySelector(".backbtn"),
submitBtn= document.querySelector(".submit");

// console.log(len(fullname));
//page linking
Pagelinking(backBTN, "index.html");
// console.log(detail);
//Saving work
submitBtn.addEventListener("click", function(){
    // var detail = [fullname.value, email.value, p];
    // console.log(detail);
    // console.log(fullname);    
    if(((fullname.value).length > 8) & ((email.value).length>=6) & ((password.value).length>=8)){
        var detail= [fullname.value,password.value]
        window.localStorage[email, detail]
    }
})
// signup()
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

