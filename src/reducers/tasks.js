// 初期データ
const initialState = {
  task: '',
  tasks: [],
};

// Reducerを作成
// アクションタイプによって処理を切り分ける
export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
}