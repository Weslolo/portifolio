import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar active">
            <div  className="wrapper">
                    <div className="left"> 
                    <a href="#intro" className="logo">genius.</a> 
                     <div className="itemContainer">

                    <Person className="icon"/>
                    <span>+44 924 12 74</span>
                     </div>
                     <div className="itemContainer">

                    <Mail className="icon"/>
                    <span>safak@genius.com</span>
                     </div>
                    </div>
                    <div className="right"> 
                    <div className="hamburger">
                        <span className="linel1"></span>
                        <span className="linel2"></span>
                        <span className="linel3"></span>
                    </div>
                    </div>
            </div>
        </div>
    )
}

