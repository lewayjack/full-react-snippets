import React from "react";
import { useDispatch } from "react-redux";
import styles from "./index.less";
import cls from "classnames";

export default function Test() {
  const [curTime, setCurTime] = useState("11-11");
  const _isLoading = useSelector((s) => s.app.isLoading);
  const dispatch = useDispatch();
  const roomReducer = (state, action) => {
    return state + action}
  }
  const [room, setRoom] = useReducer(roomReducer, 1)

  
() => {
  {  for (let i = 0; i < array.length; i++) {
      const element = array[i];
      
    }}
}


  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="">
        {[1, 2].map((e) => {
          return (
            <div

            
              className={cls(styles.item, {
                [styles.itemActive]: index === 1,
              })}
            >
              {e}
            </div>
          );
        })}
      </div>
    </>
  );
}
