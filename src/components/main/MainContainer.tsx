import { useAppSelector } from "../../hook";
import Main from "./Main";
import questionType from "../../types/Types";
import styles from './Main.module.css';


const MainContainer = () => {

    const datatest = useAppSelector(state => state.questions.data);


    return (
        <div className={styles.bigcontainer}>
            {datatest.map((question: questionType) => (
                <Main
                    key={question.id}
                    {...question}
                />
            ))}
        </div>
    )
}

export default MainContainer;