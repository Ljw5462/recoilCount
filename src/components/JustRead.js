// atom을 읽기만 하는 컴포넌트
import  {useRecoilValue}  from 'recoil';
import { countState } from '../recoil/AtomCount';


const ReadOnlyCount = () => {
    const count = useRecoilValue(countState); //구독하는 atom의 값만 반환함
    return (
        <div>
            <h2>Just read component</h2>
            <p>Just read Count : {count}</p>
        </div>
    );
}

export default ReadOnlyCount;