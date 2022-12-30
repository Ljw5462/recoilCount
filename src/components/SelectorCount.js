import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, inputState, countInputState } from '../recoil/AtomCount';

const SelectorCount = () => {
    const [count, setCount] = useRecoilState(countState); //useRecoilState 을 통한 value, setter 반환
    const [input, setInput] = useRecoilState(inputState); //useRecoilState 을 통한 value, setter 반환
    const countInput = useRecoilValue(countInputState); //useRecoilValue 을 통한 selector 의 get value 반환
    const [countInputNum, setCountInputNum] = useRecoilState(countInputState); 

    return (
        <div>
            <h2>Read & write count component</h2>
            <p>count {count}</p>
            <p>selector {countInput}</p>
            <br></br>
            <input value={input} onChange={(e) => setInput(e.target.value)} /> 
            <button onClick={() => setCount(count + 1)}>Num Increase</button>
            <button onClick={() => setCount(count - 1)}>Num Decrease</button>
            <button onClick={() => setCountInputNum('19999999')}>Change selector number 19999999</button>
        </div>
    );
}

export default SelectorCount;


// 성공적으로 input, count 의 정보를 조합한 selector 의 정보가 보이고 
// 각 atom들의 정보 변경시점마다 동일하게 변경됨