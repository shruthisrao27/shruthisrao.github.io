import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';
import './SidebarChannel.scss'
const Channelmap=({msg})=>{
    const navigate = useNavigate();
    const id=useSelector((state)=>state.doc.id);
    const currentserverid=useSelector((state)=>state.currentserver.id)
    return (
        <div>
             <p key={msg.id} onClick={()=>{
                 navigate.push(`/discord-clone/channels/${currentserverid}/${msg.id}`)
                }}
                className={`${id===msg.id && `clicked`} sidebarchannel__content`}>
                <span className='sidebarchannel__hash'>#</span>{msg.channel}</p>
        </div>
    )
}

export default Channelmap
