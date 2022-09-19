import {useQuery} from "react-query"
import axios from "axios"


const fetchUserByEmail=(email)=>{
    return axios.get(`http://localhost:4000/users/${email}`)
  }

  const fetchCoursesByChannelId=(channelId)=>{
    return axios.get(`http://localhost:4000/channels/${channelId}`)
  }


function DependentQueries({email,...props}) {

    const {data: user} = useQuery(["user", email],()=>fetchUserByEmail(email))
    const channelId= user?.data.channelId

    const {data: course} = useQuery(["courses", channelId],()=>fetchCoursesByChannelId(channelId), {
        enable: !!channelId,
    })

  return (
    <div>DependentQueries</div>
  )
}

export default DependentQueries