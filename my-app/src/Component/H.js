import React from "react";

const H = (props) => {
    console.log(props)
    return (
        <div>
            Hello {props.name} a.k.a {props.heroName}

        </div>
    )
}

export default H;
