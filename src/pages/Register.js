

import { NotificationContainer, NotificationManager } from 'react-notifications'
import Register from '../features/user/Register'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { removeNotificationMessage } from '../features/common/headerSlice'
import 'react-notifications/lib/notifications.css';



function ExternalPage() {
    const dispatch = useDispatch()
    const { newNotificationMessage, newNotificationStatus } = useSelector(state => state.header)
    useEffect(() => {
        if (newNotificationMessage !== "") {
            if (newNotificationStatus === 1) NotificationManager.success(newNotificationMessage, 'Success')
            if (newNotificationStatus === 0) NotificationManager.error(newNotificationMessage, 'Error')
            dispatch(removeNotificationMessage())
        }
    }, [newNotificationMessage])


    return (
        <div className="">
            <Register />


            {/** Notification layout container */}
            <NotificationContainer />

        </div>
    )
}

export default ExternalPage