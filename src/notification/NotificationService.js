import { useState, useContext, createContext } from 'react'

export const Notification = ({ type, text}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 50,
        backgroundColor: type === 'success' ? 'blue' : 'red',
        color: 'yellow',
        padding: '10px 20px 10px 20px',
        borderRadius: 20
    }

    if(!text) return

    return (
        <div style={notificationStyle}>
            {text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    }) 

    const setNotification = (type, text) => {
        setNotificationData({type, text})

        setTimeout(() => {
            setNotificationData({ type: 'success', text: ''})
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {/* {notificationData.text && <Notification {...notificationData}/>} */}
            <Notification {...notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}