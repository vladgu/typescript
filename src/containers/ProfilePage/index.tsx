import React from 'react'
import { connect } from 'react-redux'
import './profilePage.css'

const ProfilePage = ({ userInfo }) => {
    return (
        <div className='profile-page'>
            {
                userInfo
                    ? <div className="user-info">
                        <span className="text center">Current user:</span>
                        <h1 className="user-name center">{`${userInfo.title}. ${userInfo.name} ${userInfo.surname}`}</h1>
                        <img src={userInfo.photo} alt="USER_PHOTO" className="user-photo" />
                        <p><span className="text">Date of birth, age: </span>{`${userInfo.birthday.mdy}, ${userInfo.age} year(s)`}</p>
                        <p><span className="text">Living in: </span>{userInfo.region}</p>
                        <p><span className="text">Email adress: </span>{userInfo.email}</p>
                        <p><span className="text">Phone number: </span>{userInfo.phone}</p>
                    </div>
                    : null
            }
        </div>
    )
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        userInfo: loginReducer.userInfo
    }
}

export default connect(mapStateToProps)(ProfilePage)