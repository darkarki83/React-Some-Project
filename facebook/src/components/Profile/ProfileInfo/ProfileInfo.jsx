import s from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div>
      <div>
        <img height="700px" src='https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg' />
      </div>
      <div className={s.descriptionBlock} >Ava + description</div>
    </div>
  )
}