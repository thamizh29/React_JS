import React from "react";
export default function InputBox({type, placeholder, name}) {
    return (
        <>
            <input name={name}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                required
            />
        </>
    );
}