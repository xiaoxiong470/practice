import React from "react";
import {Buttons} from "./Buttons";
import {Area} from "./Area";
import {Color} from "./Color";

export function App() {
    return (
        <div>
            <Color>
                <Buttons/>
                <Area/>
            </Color>
        </div>
    )
}