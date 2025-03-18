import React from 'react'
import { useChatStore } from '../store/useChatStore'
import NoChatSelected from '../components/NoChatSelected'
import ChatContainer from '../components/ChatContainer'
import Sidebar from '../components/Sidebar'

const HomePage = () => {
  const { selectedUser } = useChatStore()

  return (
    <div className="w-full bg-base-200">
      <div className='w-full' style={{ height: 'calc(100vh - 64px)', marginTop: '64px' }}>
        <div className='bg-base-100 w-full h-full'>
          <div className='flex h-full overflow-hidden'>
            <Sidebar />
            <div className='flex-1 h-full overflow-hidden'>
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage