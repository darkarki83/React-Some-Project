import s from "./DialogItem.module.css";

export default function DialogItem({ name, id }) {
    return <div className={s.dialogItem}>{name}</div>; // Adjust the JSX as needed
  }