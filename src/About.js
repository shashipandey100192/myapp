
import React,{Fragment} from "react"
function Myabout()
{
    // return <h1>sdfhsjdhfjsdhf</h1>
    return(
        <Fragment>
        <h1 className="first">heading one</h1>
        <h2>heading two </h2>
        <h3>heading three</h3>
        </Fragment>
       
    )
}

export default Myabout



 export function Mypage()
{
    const name = "kumar";
    const age = 40;

    return(
        <h2>this is heading  {age} {name}  {50+60} {age>80? "yes": "no"} {<p>sdfsdf</p>}</h2>
    )
}

export function Page3()
{
    // return(
    //     <h1>heading one</h1>
    // )
    // return(
    //     <h2>heading two</h2>
    // )
    // return(
    //     <h3>heading three</h3>
    // )

    const age =40;
    if(age>80)
    {
        return(
            <h1>heading one</h1>
        )
    }
    else if(age>50)
    {
        return(
            <h2>heading two</h2>
        )
    }
    else
    {
        return(

            <h3>heading three</h3>
        )
    }
}

