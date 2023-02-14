function calculate(){
    var a ,b 
    a=f.n1.value;
    a=parseInt(a);
    b=f.n2.value;
    b=parseInt(b);
    if(b<0 || b>100){
        alert("Enter valid number in tip between 1-100")
    }
  else{  
    c=b*a/100;
    d=a+c;
    alert("The tip amount is ₦"+c+" and the total amount is ₦"+d)
    }    
}