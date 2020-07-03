import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  task: '',
  tasks: [],
};

// Reducerを作成
// アクションタイプによって処理を切り分ける
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.type]),
      };
    default:
      return state;
  }
}

// Storeを作成する
// ReduxのStoreを生成する場合、Reducerが必要となる
const store = createStore(tasksReducer);

// アクションタイプを変数化する
const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';

// タスク入力用のActionCreator
const inputTask = (task) => ({
  type: INPUT_TASK,
  payload: {
    task,
  },
});

// タスク追加用のActionCreator
const addTask = (task) => ({
  type: ADD_TASK,
  payload: {
    task,
  },
});

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map(function (item, i) {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);
