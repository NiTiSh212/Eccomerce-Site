import SideBar from '../NavBar/SideBar'
import { Outlet } from "react-router-dom";
const Routes=()=>{
    return(
        <>
      <div className="container">
       <SideBar/>
       <Outlet/>  
    </div>
        </>
    )
}

export default Routes;
