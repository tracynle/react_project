import React from "react";

export function AuthContainer({ fluid, children}){
    return <div className={`AuthContainer${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function AuthRow({fluid, children}){
    return <div className={`AuthRow ${fluid ? "-fluid" : ""}`}>{children}</div>
}

export function Col({ size, children}) {
    return ( 
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join("")}
        >
            {children}
        </div>
    );
}
    

