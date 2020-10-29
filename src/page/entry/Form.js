import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/entry";
import { setEntry } from "../../redux/entry";
import Button from "@material-ui/core/Button";

import axios from "axios";

const Form = ({ setEntry }) => {
  // const dispatch = useDispatch();

  let history = useHistory();

  const moveList = () => {
    history.push("/entry/List");
  };

  const dispatch = useDispatch();

  let scoreRef = useRef("");
  useEffect(() => {
    scoreRef.current = score;
  });

  // DB에 저장한 score데이터
  const [score, setScore] = useState("");

  //form data
  //얘도 리스트에 보내줘야하는 게 아닐까?
  const [user, setUser] = useState({
    regiId: 1,
    score: scoreRef.current,
    name: "",
    email: "",
  });

  //유저정보 데이터 바인딩 처리함수       //이거 넣으니까 데이터입력해주세요 false alert안 뜬다!
  const onUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //데이터 백엔드 저장처리함수
  const onEntryDataSave = () => {
    console.log("이름+이메일 입력완료");
    // 유효성검사 만약 form이 비어있으면
    if (user.name == "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (user.email == "") {
      alert("이메일을 입력해주세요.");
      return false;
    }
    dispatch(setUserInfo(user));

    //
    if (
      window.confirm(
        "응모가 완료되었습니다! [확인]을 누르면 확인페이지로 이동합니다."
      ) == true
    ) {
      history.push("/entry/list/");
    } else {
      return false;
    }
  };

  const globalScore = useSelector((entryState) => entryState.entry.score);

  //나중에 날리셈^_^ㅋ
  //DB로 들어가고있는건 얘
  useEffect(() => {
    var data = {
      regiId: 1,
      name: "",
      email: "",
      score: scoreRef.current,
    };

    // Axios 백엔드
    // const apiUrlEntry = "http://localhost:8000/api/entry/";

    // axios
    //   .get(apiUrlEntry)
    //   .then((response) => {
    //     console.log("등록완료데이터:", response.data);
    //     alert("score axios error 덜덜쓰...");
    //     data(response.data);
    //   })
    //   .catch((response) => {
    //     console.error(response);
    //   });

    // // user 응모정보 이름/이메일
    // axios
    //   .post(apiUrlEntry, data)
    //   .then((response) => {
    //     console.log("등록완료데이터:", response.data);
    //     // alert("등록완료");
    //     // history.push("/entry/List");
    //   })
    //   .catch((response) => {
    //     console.error(response);
    //   });
  });

  return (
    <div>
      <div className="back">
        <div className="wrap">
          <img src="/img/d-form.svg" className="d-form" alt="logo" />
        </div>
      </div>

      {/* Counter.js에서 받아온 globalScore값을 꺼내왔음*/}
      <h2>
        최종 score는 <br />
        {globalScore}점 입니다
      </h2>

      <table style={{ margin: "auto" }}>
        <tbody>
          {/* 응모폼 작성하는 곳 */}
          <tr>
            <td>Name :</td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={user.name}
                onChange={(e) => onUserChange(e)}
              />
            </td>
          </tr>

          <tr>
            <td>Email :</td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={user.email}
                onChange={(e) => onUserChange(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h6>
        이벤트 종료 후 당첨된 분들께 상품전달이 완료되면
        <br />
        개인정보는 모두 파기됩니다.
        <br />
      </h6>

      {/* 응모 폼 전송버튼 */}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onEntryDataSave()}
      >
        응모
      </Button>
      <Button variant="contained" color="default" onClick={() => moveList()}>
        응모확인
      </Button>
    </div>
  );
};

export default Form;
