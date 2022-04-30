//import logo from './logo.svg';
import './App.css';

function App() {
  var option=["Services","Projects","About"]
  return (
    <div  className="nav"  >
 <Logo logocon="LOGOBAKERY" />
    {option.map((e)=>{
       return <Links opt={e}/> })
    }
    <Button cont="Contact"/>
    </div>
  );
}
function Logo(props){
  console.log(props.logocon)
return <p id="log">{props.logocon}</p>
}
function Links(props){
  console.log(props.opt)
return <li className="lin">{props.opt}</li>
}
function Button(props){
  console.log(props.cont)
return <button id="btn1">{props.cont}</button>
}
export default App;
