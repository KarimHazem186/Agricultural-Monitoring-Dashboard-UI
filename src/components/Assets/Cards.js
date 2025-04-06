import React, { useEffect, useState } from "react";
import {
    fan,
    fire,
    GarSmoke,
    humidityTemperature,
    light,
    rain,
    SoilMoisture,
    waterPump
} from "./Data";
import { FaRegLightbulb } from "react-icons/fa";

const lightColorMap = {
    0: "black",
    10: "blue",
    20: "orange",
    30: "green",
    40: "yellow",
    50: "silver",
    60: "pink",
    80: "cyan",
    100: "red"
};

const Card = () => {
    const [lightValue, setLightValue] = useState(0);
    const [lightIcon, setLightIcon] = useState(<FaRegLightbulb color="black" />);
    const [fanState, setFanState] = useState(false);
    const [pumpState, setPumpState] = useState(false);

    useEffect(() => {
        const color = lightColorMap[lightValue] || "black";
        setLightIcon(<FaRegLightbulb color={color} />);
    }, [lightValue]);

    return (
        <div className="mainContainer">
            {/* Light Control */}
            <div className="box">
                <div className="card">
                    <div className="icon">{lightIcon}</div>
                    <div className="desc">
                        <h1>{light.title}</h1>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="10"
                            className={lightValue > 50 ? "height" : "less"}
                            value={lightValue}
                            onChange={(e) => setLightValue(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>

            {/* Humidity & Temperature */}
            <div className="box">
                <div className="card">
                    <div className="icon">{humidityTemperature.icon}</div>
                    <div className="desc">
                        <h1>{humidityTemperature.title}</h1>
                        <p> {humidityTemperature.humidity}</p>
                        <p> {humidityTemperature.temperature}</p>
                    </div>
                </div>
            </div>

            {/* Fan Toggle */}
            <div className="box">
                <div className="card">
                    <div className="icon">{fan.icon}</div>
                    <div className="desc">
                        <h1>{fan.title}</h1>
                        <button
                            onClick={() => setFanState(!fanState)}
                            type="button"
                            className={`toggle-on ${fanState ? "toggle-off" : ""}`}
                        >
                            {fanState ? "ON" : "OFF"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Soil Moisture */}
            <div className="box">
                <div className="card">
                    <div className="icon">{SoilMoisture.icon}</div>
                    <div className="desc">
                        <h1>{SoilMoisture.title}</h1>
                        <p>{SoilMoisture.soil}</p>
                    </div>
                </div>
            </div>

            {/* Gas & Smoke */}
            <div className="box">
                <div className="card">
                    <div className="icon">{GarSmoke.icon}</div>
                    <div className="desc">
                        <h1>{GarSmoke.title}</h1>
                        <p>{GarSmoke.status}</p>
                    </div>
                </div>
            </div>

            {/* Fire */}
            <div className="box">
                <div className="card">
                    <div className="icon">{fire.icon}</div>
                    <div className="desc">
                        <h1>{fire.title}</h1>
                        <p>{fire.status}</p>
                    </div>
                </div>
            </div>

            {/* Rain */}
            <div className="box">
                <div className="card">
                    <div className="icon">{rain.icon}</div>
                    <div className="desc">
                        <h1>{rain.title}</h1>
                        <p>{rain.status}</p>
                    </div>
                </div>
            </div>

            {/* Water Pump Toggle */}
            <div className="box">
                <div className="card">
                    <div className="icon">{waterPump.icon}</div>
                    <div className="desc">
                        <h1>{waterPump.title}</h1>
                        <button
                            onClick={() => setPumpState(!pumpState)}
                            type="button"
                            className={`toggle-on ${pumpState ? "toggle-off" : ""}`}
                        >
                            {pumpState ? "ON" : "OFF"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
