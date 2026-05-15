import { Fragment } from "react/jsx-runtime"
import Userinfopage from "./Userinfo"

function Myabout()
{
    return <h1>this is my data </h1>
}

export default Myabout

function Aboutpage()
{
    return <div><h3>this is heading three</h3><h2>sdfsdf</h2></div>
}

function Contactus()
{
    return(
       <Fragment>
             <div className="first">this is my element</div>
            <section>this is my section  </section>
       </Fragment>
    ) 
}



export function Service(){
    return(
        <div>
            <h1>heading</h1>
            <p>this is my text</p>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <Userinfopage></Userinfopage>
        </div>

    
    )
}



export {Aboutpage,Contactus}