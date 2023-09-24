const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Gurren_Lagann_key_visual.jpg") {
    myImage.setAttribute("src", "images/gurrenTitle.png");
  } else {
    myImage.setAttribute("src", "images/Gurren_Lagann_key_visual.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Gurren Lagann è fichissimo, ${myName}`;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Gurren Lagann è fichissimo, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

  
  
