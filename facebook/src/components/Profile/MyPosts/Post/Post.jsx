import s from './Post.module.css';

export default function Post(props) {

    //debugger;

    return (
        <div>
            <div className={s.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/72/Threedom_Small.jpg' />
                <div>{props.message}</div>
                <span> like: {props.likes}</span>
            </div>
        </div>
    )
}