import { 
  ServerTitle, 
  ServerSidebar, 
  ServerChannelList, 
  UserPanel, 
  Avatar, 
  ServerChannel 
} from '../styles/ServerSidebarStyles';
import Image from '../imagesObj';
import React from 'react';
interface ServerSidebarProps {
  toggleUserStatusPanel(): void,
}
export default function ServerSidebarComponent({ toggleUserStatusPanel }: ServerSidebarProps) {
  return(
  <ServerSidebar>
    <ServerTitle>
    <h5>Test Server</h5>

    </ServerTitle>
    <ServerChannelList>
      <ServerChannel>
      <div>
        <span>
          <img src={Image.channelHashIcon} alt="" />
        </span>
        <p>test</p>
      </div>
    </ServerChannel>
    </ServerChannelList>

    <UserPanel>
      <Avatar onClick={toggleUserStatusPanel}/>
    </UserPanel>
  </ServerSidebar>
  )
}