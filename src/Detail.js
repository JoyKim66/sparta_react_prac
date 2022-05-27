//Detail.js
// 리액트 패키지를 불러옵니다.
import React from "react";
// 라우터 훅을 불러옵니다.
import {useParams} from "react-router-dom";
// redux hook을 불러옵니다.
import {useHistory} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import {deleteBucket} from "./redux/modules/bucket";

const Detail = (props) => {
    
  // 스토어에서 상태값 가져오기
const bucket_list = useSelector((state) => state.bucket.list);
// url 파라미터에서 인덱스 가져오기
const params = useParams();
const bucket_index = params.index;
const history = useHistory();
const dispatch = useDispatch();

  return <>
            <h1>{bucket_list[bucket_index]}</h1>
            <button onClick={() => {
                console.log("삭제하기 버튼 누름");
                dispatch(deleteBucket(bucket_index));
                history.goBack();
            }}>삭제하기</button>
        </>
};

export default Detail;