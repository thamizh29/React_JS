import { useState } from "react";
export default function Use() {
    const [dis, setDis] = useState("");
    return (
        <>
            <h1>{dis}</h1>
            <input onChange={(e) => {setDis(e.target.value)}} />
        </>
    );
}