import React, {Suspense} from "react";

export function withSuspense <WP> (WrappedComponent: React.ComponentType<WP>)  {
return (props: WP)=>{
    return <Suspense fallback={<div>Loading...</div>}>
        <WrappedComponent {...props} />
    </Suspense>
    }
}
