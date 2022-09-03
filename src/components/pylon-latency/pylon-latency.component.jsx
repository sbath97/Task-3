import { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";

const w3cClient = new w3cwebsocket("ws://localhost:55455");

export default function PaylonLatency(){
    const [latency, setLatency] = useState();
    const [timestamp, setTimestamp] = useState();
    useEffect(()=>{
        w3cClient.onmessage = msg=>{
            setTimestamp(prev=>{
                let currentTimestamp = parseInt(msg.data);
                if(prev){
                    setLatency(currentTimestamp-prev);
                }
                return currentTimestamp;
            });
        };
    });
    return (
        <div>
            Network Latency (ms): {latency}
        </div>
    );
}