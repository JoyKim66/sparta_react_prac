// bucket.js

// Actions
const CREATE = 'bucket/CREATE';

const initialState = {
    list : ["영화관 가기", "매일 책읽기", "수영 배우기","테스트"],
}

// Action Creators
export function createBucket(bucket) {
  console.log("액션을 생성할거야!");
    return {type: CREATE, bucket:bucket};
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE" : {
        console.log("이제 값을")
        const new_bucket_list = [...state.list, action.bucket];
        return {list : new_bucket_list};
    }
    default: return state;
  }
}