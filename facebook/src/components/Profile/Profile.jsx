import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

export default function Profile() {
    return (
        <div className={s.content}> 
        <img height="700px" src='https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg' />
        <MyPosts />
        <div>Main Context </div>
      </div>
    )
}