import Header from "./Header/Header";
import MainDash from "./MainDash/MainDash";
import RightSide from "./RigtSide/RightSide";
import Sidebar from "./Sidebar";

const SupervisionDash = () => {
    return (
        <div className="App">
             {/*<Header/>*/}
            <div className="AppGlass">
                <Sidebar/>
                <MainDash />
                <RightSide />
            </div>
        </div>
    );
}

export default SupervisionDash;