import { useEffect, type ComponentType } from "react";

function withLogger<P extends object>(Wrapped: ComponentType<P>, name: string){
    function ComponentLog(props:P){
        useEffect(() => {
            console.log(`${name} is mounted`)
            return () => {
                console.log(`${name} is unmounted`)
            }
        }, [])
        return <Wrapped {...props}/>
    }
        return ComponentLog;
}

export default withLogger;