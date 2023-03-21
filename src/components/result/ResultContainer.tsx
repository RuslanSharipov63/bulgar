import Result from "./Result";
import { useAppSelector } from "../../hook";
import questionType from "../../types/Types";
import styles from './Result.module.css'

const ResultContainer = () => {
    const datatest = useAppSelector(state => state.questions.data)

    return (
        <div className={styles.bigContainer}>
            {datatest.map((question: questionType) => (
                <Result
                    key={question.id}
                    {...question}

                />
            ))}
        </div>

    )
}

export default ResultContainer;