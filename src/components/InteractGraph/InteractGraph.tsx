import clsx from "clsx";

import styles from "./InteractGraph.module.scss";
import { useState, useMemo } from "react";

import dynamic from "next/dynamic";
import TextField from "@mui/material/TextField";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type InteractGraph = {
    className?: string;
};

function getParams(k: number) {
    var x = [];
    var y = [];
    for (var i = -10; i <= 10; i += Math.PI / 8) {
        x.push(i);
        y.push(Math.tan(i + k));
    }

    // Create plot
    const data = [
        {
            x: x,
            y: y,
            mode: "lines",
            line: {
                width: 2,
                color: "blue",
            },
        },
    ];

    const layout = {
        title: `y = tg(x + ${k})`,

        width: 700,
        height: 700,
        xaxis: {
            title: "x",
        },
        yaxis: {
            title: "y",
        },
    };

    return [data, layout];
}

const InteractGraph = ({ className }: InteractGraph) => {
    const [k, setK] = useState(0);

    const [data, layout] = useMemo(() => getParams(k), [k]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);

        if (value <= 10 && value >= 0) {
            console.log(" ----------------------------");
            console.log("handleChange ~ value:", value);
            console.log(" ----------------------------");
            setK(value);
        }
    };

    return (
        <div className={clsx(styles.interactGraph, className)}>
            <TextField
                label="введіть K"
                onChange={handleChange}
                classes={{ root: styles.input }}
            />
            <Plot data={data} layout={layout} />
        </div>
    );
};

export default InteractGraph;
