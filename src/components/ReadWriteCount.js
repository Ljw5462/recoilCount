import { 
    useRecoilState, 
    useSetRecoilState, 
    useResetRecoilState 
} from 'recoil';
import { countState } from '../recoil/AtomCount';




const ReadWriteCount = () =>{

    // useRecoilState : 기존 useState 와 같이 변경되는 값과 해당 값을 변경하는 함수를 반환합니다.
    // useRecoilValue : 구독하는 값만 반환하는 함수입니다. 값의 update 함수가 필요없을 경우 사용합니다.
    // useSetRecoilState : 구독하는 값을 변경하는 함수만 반환합니다.
    // useResetRecoilState: 값을 기본값으로 reset 시키는 함수를 반환합니다.

    const [count , setCount] = useRecoilState(countState);
    const setCountUseSetRecoilState = useSetRecoilState(countState);
    const resetCount = useResetRecoilState(countState);
    return (
        <div>
            <h2>read & write count component</h2>
            <p>count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count -1)}>Decrease</button>
            <button onClick={()=> setCountUseSetRecoilState(count + 1)}>Increase to useSetRecoilState</button>
            <button onClick={()=> setCountUseSetRecoilState(count - 1)}>Decrease to useSetRecoilState</button>
            <button onClick={resetCount}>Reset Count</button>
        </div>
        
        )
}


export default ReadWriteCount;