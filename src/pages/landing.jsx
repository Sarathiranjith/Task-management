import Header from "../components/Header";
import Card from "../components/Card";
import Todocomponent from "../components/Todocomponent";
import { useLocation } from "react-router-dom"


function Landing()
{
    const data=useLocation()

    return(
<div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user}/>

        <div className="flex justify-between gap-7 my-5 flex-wrap">

          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:24:00"} />
          <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
        </div>

        <Todocomponent/>
      </div>
    </div>
    )
}

export default Landing