import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setEntry } from "../redux/entry";
import ProgressBar from "../components/progress-bar.component";

function Button() {
  const dispatch = useDispatch();
  let history = useHistory();

  const [score, setScore] = useState(0);

  const [sec, setSec] = useState();

  let scoreRef = useRef("");
  useEffect(() => {
    scoreRef.current = score;
  });

  // ProgressBar 시작
  let secRef = useRef("");
  useEffect(() => {
    secRef.current = sec;
  });
  const secc = useRef(1);
  const setSecc = (n) => {
    secc.current = n;
  };
  const printSecc = () => {
    console.log(secc.current);
  };
  const [completed, setCompleted] = useState(0);
  const testData = [
    { bgcolor: "#6a1b9a", completed: `${completed}`, secc: `${secc}` },
  ];
  // ProgressBar 끝

  //와 setTimeout 진짜 어렵다ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
  useEffect(() => {
    setTimeout(() => {
      // Timeout 5초가 끝나면 최종 스코어를 로그에 저장

      // setScore(scoreRef.current + 14500);
      // setTimeout이 끝났을 때 최종스코어를 리덕스에 담음
      dispatch(setEntry(scoreRef.current));
      console.log("현재 최종 스코어는???", scoreRef.current);
      //왜냐하면 여기서 name,email 값을 ""로 넣으면 전송이 안 되더라^_^,,,,,,,,,아
      if (
        window.confirm(
          "5초 끝! 응모 페이지로 이동하시겠습니까? [취소]를 누르면 게임을 다시 시작합니다"
        ) == true
      ) {
        dispatch(setEntry(scoreRef.current));
        history.push("/entry/input/");

        var data = {
          regiId: 1,
          name: "",
          email: "",
          score: scoreRef.current,
        };
        // Score를 DB에 쏴버리기
        // const apiUrlEntry = "http://localhost:8000/api/entry/";
        // axios
        //   .post(apiUrlEntry, data)
        //   .then((response) => {
        //     console.log("점수데이터전송:", response.data);
        //   })
        //   .catch((response) => {
        //     console.error(response);
        //   });
      } else {
        return false;
      }
    }, 5000);

    return () => {
      clearTimeout(sec);
    };
  }, []);

  const onIncrease = (e) => {
    setScore(scoreRef.current + 14500);
    dispatch(setEntry(score));
    console.log(`${score}점 기록`);
  };

  // window.location = "/Game

  return (
    <div>
      {/* S_Doughnut and S_bat1 */}
      <div className="box">
        {/* D_pink */}
        <div className="back">
          박쥐박쥐 박쥐는 귀가 박쥐 ( ͡° ͜ʖ ͡°)
          <img src="/img/logo192.svg" className="App-S_logo" alt="logo" />
          <h3>할로윈박쥐를 터치!!<br/>
          </h3>
        </div>
        {/* Bat */}
        <div className="front" onClick={onIncrease}>
          <img src="/img/Bat1.svg" className="App-S_bat1" alt="logo" />
        </div>
        <div className="front">
          <img src="/img/wicked1.svg" className="App-S_wicked1" alt="logo" />
          <img src="/img/wicked2.svg" className="App-S_wicked2" alt="logo" />
          <img src="/img/wicked3.svg" className="App-S_wicked3" alt="logo" />
          <img src="/img/wicked4.svg" className="App-S_wicked4" alt="logo" />
        </div>
      </div>

      <div>
        {/* progrss bar */}
        {/* <div>
          <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
        </div>

        <div>
          {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} sec={item.sec} />
          ))}
        </div> */}
      </div>

      <h1>Score: {score}점</h1>
      <br></br>

      {/* <button onClick={onIncrease}>
        도넛
      </button>
      <button onClick={onIncrease}>좋아</button> */}
    </div>
  );
}

export default Button;
