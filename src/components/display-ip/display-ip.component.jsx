import { useEffect, useState } from "react";

export const IP_Types = {IPV4:"IPV4", IPV6:"IPV6"};


function fetchPublicIp(type, setIpAddress){
    let url = "";
    if(type === IP_Types.IPV4)
        url = "https://api.ipify.org?format=json";
    else if(type === IP_Types.IPV6)
        url = "https://api64.ipify.org?format=json";
    fetch(url).then(res=>res.json()).then((resp)=>{
        setIpAddress(resp.ip);
    });
}

export default function DisplayIP({type}){
    const [ipAddress, setIpAddress] = useState();
    useEffect(()=>{
        fetchPublicIp(type, setIpAddress);
    }, [type]);
    return(
        <div>{type} : {ipAddress}</div>
    );
}