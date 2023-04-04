import InputBox from "../src/props_data"
export default function Parent() {

    return (
        <div style={{display:"flex",
                     flexDirection:"column",
                    }}>
            <h1>This is the Parent class</h1>
            <InputBox type={"text"} placeholder={"text"}/>
            <InputBox type={"number"} placeholder={"number"}/>
            <InputBox type={"password"} placeholder={"password"}/>

        </div>
    );
}