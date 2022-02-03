import { useAppDispatch, useAppSelector } from 'hooks/hook';
import { increment, decrement } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
            </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
            </button>
            </div>
        </div>
    )

}

export default Counter;