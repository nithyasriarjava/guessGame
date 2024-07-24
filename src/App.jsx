// import ReactDOM from "react-dom/client";
// import Text from "./Text.jsx";

// const checkText =  document.getElementById("text");
// ReactDOM.createRoot(checkText).render(<Text />);

// let list= ["hi","helo","bye"];

import animateImg from "./assets/congrats.gif";

function SuccessMsg(){
  return(
   <h2 className="success" id="successMsg">
      {/* <h1> {list} This is head one tag</h1> */}
      <div id="bg-img"></div>
   </h2>
  );
}

function getRandomNumber(){
  return Math.floor(Math.random() * 20);
}

function checkFunction(randomValue){
  let userValue = document.getElementById("userInput").value;
  // console.log(userValue);
  if(userValue == randomValue){
    // console.log(document.getElementById('bg-img'));
    // document.getElementById('bg-img').classList.add('bg-sty');
  document.getElementById("successMsg").innerHTML = "Your answer is correct 🥳";
  document.getElementById("successMsg").style = "color:green";
  // document.body.style = `background-image:url(${animateImg})`;
  document.body.classList.add('bg-sty');
  }
  else if(userValue == ""){
    document.getElementById("successMsg").innerHTML = "Enter The Number 😅";
  document.getElementById("successMsg").style = "color:white";
  }
  else if(userValue < randomValue){
    document.getElementById("successMsg").innerHTML = "Its too low 😅";
    document.getElementById("successMsg").style = "color:white";
  }
  else if(userValue > randomValue){
    document.getElementById("successMsg").innerHTML = "Its too high 😅";
    document.getElementById("successMsg").style = "color:white";
  }
  else{
    document.getElementById("successMsg").innerHTML = "Invalid choice 👎";
    document.getElementById("successMsg").style = "color:red";
  }
}

{/* <AnimatedGif image = {animateImg}/> */}
// function AnimatedGif(image){
//    return <img src={image.image} alt="" srcset="" />
// }
function App() {
  const expectedValue = getRandomNumber();
  console.log(expectedValue);
  return (
    <div>
      <header>
      {/* <Head/> */}
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <h1>Guess Game Using React</h1>
        <h3>Your guess Number 0-20</h3>
        <input type="number" className="input-sty" name="" id="userInput" />
      </header>
      <main>
        <button className="submitButton"
         onClick={()=>{checkFunction(expectedValue)}}>Submit</button>
      </main>
      <SuccessMsg/>
      {/* {document.getElementById("userInput").value!="" && 
      <img src = {(expectedValue === document.getElementById("userInput").value) 
      && {animateImg}}/>} */}
    </div>  
  );
}

export default App;
