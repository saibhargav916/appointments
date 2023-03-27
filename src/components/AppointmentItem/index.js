import {formatDistanceToNow} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickStar = () => {
    const {toggleIsStarred} = props
    toggleIsStarred(id)
  }

  return (
    <li>
      <div>
        <div>
          <h1>{title}</h1>
          <button type="button" onClick={onClickStar}>
            <img src={starImgUrl} alt="star" />
          </button>
        </div>
        <p>{postedTime}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
