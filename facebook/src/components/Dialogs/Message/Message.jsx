import s from './Message.module.css'; // If using CSS Modules

export default function Message({ message }) {
  return <div className={s.message}>{message}</div>;
}
