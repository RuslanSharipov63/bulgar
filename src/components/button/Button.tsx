import styles from './Button.module.css';
import { btnTypes } from '../../types/Types';

const Button: React.FC<btnTypes> = ({ text, answerLater }) => {
    return (

        <button
            className={`${styles.custombtn} ${styles.btn10}`}
            onClick={answerLater}
        >
            {text}
        </button>

    );
}

export default Button;