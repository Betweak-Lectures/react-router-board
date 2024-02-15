import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";

export default function Sample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //   const myName = `신${name}`;
  const myName = useMemo(() => {
    return `신${name}`;
  }, [name]);

  const ref = useRef(null);

  const Fn1 = () => {
    // ref를 핸들링하는 함수
    console.log(ref.current.value);
  };

  return (
    <>
      <div>
        {/* <Button Fn1={Fn1} onClick={() => increaseCount()}>
          증가
        </Button> */}
        <h1>Count: {count}</h1>
      </div>
      <div>
        <h3>myname: {myName}</h3>
        <input
          type="text"
          ref={ref}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <h1>입력: {name}</h1>
      </div>
    </>
  );
}
