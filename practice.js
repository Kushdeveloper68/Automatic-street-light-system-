// selecting element 
let lightDiv = document.getElementById("light");
let btn = document.getElementById("change");
let body = document.getElementById("bd");
let h1 = document.getElementById("h1");
let day = "mor";
// calling function
 
  function save(){ 
    if(day === "mor"){
      lightDiv.style.backgroundColor = "black";
      lightDiv.style.color = "white";
      /* if backgroundColor of light is white then , backgroundColor of body is black */
      body.style.backgroundColor = "white";
      h1.innerText = "morning";
    btn.innerText = "ON light";
      day = "night";
    } else {
      lightDiv.style.backgroundColor = "white";
      lightDiv.style.color = "black";
            /* if backgroundColor of light is black then , backgroundColor of body is white */
      body.style.backgroundColor = "black";
      h1.innerText = "Night";
      btn.innerText = "OFF light";
      day = "mor";
    }
    
  }