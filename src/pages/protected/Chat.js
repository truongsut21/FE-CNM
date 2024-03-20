import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Chat from '../../features/chat'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Cuộc trò chuyện cá nhân"}))
      }, [])


    return(
        <Chat />
    )
}

export default InternalPage