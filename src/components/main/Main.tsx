import { SetStateAction, useState } from 'react';
import styles from './Main.module.css';
import ButtonContainer from '../button/ButtonContainer';
import { typeForMain } from '../../types/Types';


const Main: React.FC<typeForMain> = ({ id, question, answer1, answer2, answer3, leaveForLater,  addAnswerUser, }) => {
   
    const [value, setValue] = useState('0');


    const chengeValue = (e:
        {
            target: {
                value: SetStateAction<string>;
                name: string
            };
        }) => {

         setValue(e.target.value);
   

        let content = {
            id: id,
            name: e.target.name,
            leaveForLater,
        }
        addAnswerUser?.(content)
    }


    return (
        <div className={`${styles.container} ${leaveForLater ? styles.active : null}`} >
            <p className={styles.question}>{id}. {question}</p>
            <div className={styles.wrapper}>
                <p className={styles.answer}>{answer1}</p>
                <input type="radio"
                    name={answer1}
                    value="1"
                    checked={value == '1' ? true : false}
                    onChange={chengeValue}
                />

            </div>
            <div className={styles.wrapper}>
                <p className={styles.answer}>{answer2}</p>
                <input type="radio"
                    name={answer2}
                    value="2"
                    checked={value == '2' ? true : false}
                    onChange={chengeValue}
                />
            </div>
            <div className={styles.wrapper}>
                <p className={styles.answer}>{answer3}</p>
                <input type="radio"
                    name={answer3}
                    value="3"
                    checked={value == '3' ? true : false}
                    onChange={chengeValue}
                />

            </div>
            <ButtonContainer
                id={id}
                text={leaveForLater ? 'вопрос отложен' : 'ответить позже'}

            />
        </div>
    );
}

export default Main;