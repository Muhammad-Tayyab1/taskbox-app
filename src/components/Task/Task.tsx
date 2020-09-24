import React from 'react';
export interface task {
    id: string;
    title: string;
    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";

}

export interface props {
    task?:task;
    onArchiveTask?: (id:task["id"]) => void;
    onPinTask?: (id:task["id"]) => void;
    onUnpinTask?: (id:task["id"]) => void;

}



export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }:any) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" style={{ textOverflow: 'ellipsis' }} />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
        }