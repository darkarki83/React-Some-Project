import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

export default function Dialogs (props) {

    const mockDialogs = [
        { name: "Alice", id: 1 },
        { name: "Bob", id: 2 },
        { name: "Charlie", id: 3 },
        { name: "Diana", id: 4 },
        { name: "Eve", id: 5 }
      ];
      
      const mockMessages = [
        { message: "Hi there!", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "Let's meet tomorrow.", id: 3 },
        { message: "Thank you!", id: 4 },
        { message: "See you soon.", id: 5 }
      ];

  let dialogsElements = mockDialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = mockMessages.map(m => <Message message={m.message} />);
  //let newMessageText = props.newMessageText;

  let onSendMessageClick = () => {
    //prop.s.sendMessage();
  };

  /*let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };*/

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
        <div></div>
      </div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
               //value={newMessageText}
               //onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}