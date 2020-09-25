import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Task from './Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';


export function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }:any) {
  const events = {
    onPinTask,
    onArchiveTask,
  };



  if (loading) {
    return (
      <div className="list-items">
        <CircularProgress/>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t:any) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t:any) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}



PureTaskList.defaultProps = {
  loading: false,
};

export default connect(
  ({ tasks }:any) => ({
    tasks: tasks.filter((t:any) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
  }),
  dispatch => ({
    onArchiveTask: (id: any) => dispatch(archiveTask(id)),
    onPinTask: (id: any) => dispatch(pinTask(id)),
  })
)(PureTaskList);