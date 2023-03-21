import questionType from "../../types/Types";
import styles from './Result.module.css';

const Result: React.FC<questionType> = ({ id, question, answeruser, correctanswer }) => {
    return (
        <div className={styles.container}>
            <p className={styles.paragQuestion}>
                {id}. {question}
            </p>
            <p className={styles.parag}>
                <p>Ваш ответ:</p>
                <p>
                    <span className={styles.answeruser}> {answeruser === '' ? 'вы не ответили на вопрос' : answeruser}</span>
                </p>
            </p>
            <p className={styles.parag}>
                <p>Правильный ответ:&nbsp;&nbsp;</p>
                <p>
                    <span
                        className={styles.correctanswer}
                    >
                        {correctanswer}
                    </span>
                </p>
            </p>
        </div>
    );
}

export default Result;