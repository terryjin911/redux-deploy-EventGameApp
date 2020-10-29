import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// import { Link } from "react-router-dom";

import TopHeader from "../../components/TopHeader";
// import Shere from "../../components/Share";

import { setUserInfo } from "../../redux/entry";
import { setEntry } from "../../redux/entry";
import Button from "@material-ui/core/Button";

import axios from "axios";

const List = ({ setEntry, setUserInfo, getEntry }) => {
  let history = useHistory();

  //entry.js에 있는 state랑 다름ㅁ
  const globalEntryScore = useSelector((entryState) => entryState.entry.score);
  const globalEntryName = useSelector((entryState) => entryState.entry.name);
  // let history = useHistory();

  //해당 컴포넌트에서 사용할 응모유저 리스트 useState
  const [entryList, setEntryList] = useState([]);
  const entryListRedux = entryList.map((entry, idx) => (
    <li key={idx}> {entry} </li>
  ));


  // entryList는 맞는데..
  useEffect(() => {
    // const apiUrlEntry = "http://localhost:8000/api/entry/";
    // // console.log("리덕스테스트", globalEntry);
    // axios
    //   .get(apiUrlEntry, entryList)
    //   .then((response) => {
    //     // console.log("조회완료 데이터: ", response.data);
    //     setEntryList(response.data);
    //   })
    //   .catch((response) => {
    //     console.error(response);
    //   });
  }, []);
  const moveToStart = () => {
    history.push("/");
  };

  return (
    <div>
      {/* <Shere /> */}
      <TopHeader />

      <h1>응모확인 페이지</h1>
      <div>
        {/* Counter.js에서 가져온 score와 Form.js에서 가져온 사용자정보
            하지만, 사용자들의 정보가 쌓이지는 않고 현재사용자 정보만 볼 수 있어서
            이거 말고 Axios로 호출해야함. */}
        {globalEntryScore}점 | {globalEntryName}
      </div>

      <div>
        {entryList.map((item, regiId) => {
          return (
            <React.Fragment key={item.regiId}>
              <div>
                {item.score} | {item.name}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => moveToStart()}
      >
        처음으로 돌아가기
      </Button>
    </div>
  );
};

export default List;
