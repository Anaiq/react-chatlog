import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const entries =  props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        position={entry.position}
        onLikeEntry={props.onLikeEntry}
        onColorPick={props.onColorPick}
        
      />
    )
});
return <div className="chat-log">{entries}</div>
}

// alternate syntax
// const ChatLog = (props) => {
//   const getChatLogJSX =(props) => {
//     return props.entries.map((entry) => {
//       return (
//         <ChatEntry
//           key={entry.id}
//           id={entry.id}
//           sender={entry.sender}
//           body={entry.body}
//           timeStamp={entry.timeStamp}
//           liked={entry.liked}
//           position={entry.position}
//           onLikeEntry={props.onLikeEntry}
//         />
//       );
//   });
//   };
//     // using css class to style chatLog
//     return <div className="chat-log">{getChatLogJSX(props)}</div>
//   };


ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape(
      {
        //Fill with correct proptypes
        id: PropTypes.number,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool,
        position: PropTypes.string.isRequired,
  }),
  ), 
  onLikeEntry: PropTypes.func,
  onColorPick: PropTypes.func,
};

export default ChatLog;