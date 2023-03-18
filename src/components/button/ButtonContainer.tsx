import { useAppDispatch } from '../../hook';
import Button from './Button';
import { btnTypes } from '../../types/Types';
import { toggleleaveForLater } from '../../store/QuestionSlice';

const ButtonContainer: React.FC<btnTypes> = ({ text, id }) => {
    const dispatch = useAppDispatch();

    const answerLater = () => {
        dispatch(toggleleaveForLater(id))
    }

    return <Button
        text={text}
        answerLater={answerLater}
    />;
}

export default ButtonContainer;