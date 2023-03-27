import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointmentList: [],
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  renderAppointmentList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(each => (
      <AppointmentItem
        key={each.id}
        appointmentDetails={each}
        toggleIsStarred={this.toggleIsStarred}
      />
    ))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeDateInput = event => {
    this.setState({
      dateInput: event.target.value,
    })
  }

  render() {
    const {titleInput, dateInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Add Appointment</h1>
          <div className="input-img-container">
            <div className="inputs-container">
              <form onSubmit={this.onAddAppointment}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                />
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
        </div>
        <div>
          <div className="head-btn-container">
            <h1>Appointments</h1>
            <button type="button">Starred</button>
          </div>
          <ul>{this.renderAppointmentList()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
