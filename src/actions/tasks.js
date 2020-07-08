// アクションタイプを変数化する
const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';

// タスク入力用のActionCreator
export const inputTask = (task) => ({
  type: INPUT_TASK,
  payload: {
    task,
  },
});

// タスク追加用のActionCreator
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});
