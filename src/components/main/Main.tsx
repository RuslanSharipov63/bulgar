import { SetStateAction, useState } from 'react';
import styles from './Main.module.css';
import ButtonContainer from '../button/ButtonContainer';

const Main = () => {

    const [value, setValue] = useState('0');

    const chengeValue = (e:
        {
            target: {
                value: SetStateAction<string>;
                name: string
            };
        }) => {
        setValue(e.target.value);
        console.log(e.target.name)
    }


    return (
        <div className={styles.container}>
            <p className={styles.answer}>1. Основным занятием волжских булгар в XII-XIII вв. было:</p>
            <div className={styles.wrapper}>
                <p>охота</p>
                <input type="radio"
                    name="охота"
                    value="1"
                    checked={value == '1' ? true : false}
                    onChange={chengeValue}
                />
            </div>
            <div className={styles.wrapper}>
                <p>земледелие</p>
                <input type="radio"
                    name="земледелие"
                    value="2"
                    checked={value == '2' ? true : false}
                    onChange={chengeValue}
                />
            </div>
            <div className={styles.wrapper}>
                <p>рыболовство</p>
                <input type="radio"
                    name="рыболовство"
                    value="3"
                    checked={value == '3' ? true : false}
                    onChange={chengeValue}
                />
            </div>
            <ButtonContainer />
        </div>
    );
}

export default Main;