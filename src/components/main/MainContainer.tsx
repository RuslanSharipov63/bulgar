import { useSelector } from "react-redux";
import Main from "./Main";


const MainContainer = () => {
    const datatest = useSelector(state => state.questions);
    return <Main />
}

export default MainContainer;