import { Outlet } from "react-router";
import MyHeader from "./MyHeader";

const NavBar =()=>{
    return(
        <div>
    <MyHeader/>
    <main>
        <Outlet/>
    </main>
        </div>
    )
}

export default NavBar;