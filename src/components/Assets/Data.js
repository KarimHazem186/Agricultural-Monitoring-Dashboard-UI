import { FaRegLightbulb } from "react-icons/fa";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaFan } from "react-icons/fa";
import { IoPhoneLandscape } from "react-icons/io5";
import { LuCigarette } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { FaCloudSunRain } from "react-icons/fa";
import { FaFaucetDrip } from "react-icons/fa6";
import { lightData } from "./Cards";
// import { lightData } from "./App";

// const Data = [
    
//    {
//         id:1,
//         icon:<FaRegLightbulb/>,
//         title:"Light",
//         description:"lorem ipsum dolor sit amet, consectetur adip",
//         op1:<input type="range" min='0' max='100' step="10"/>
//     },

//     {
        // id:2,
        // icon:<LiaTemperatureHighSolid />,
        // title:"Humidity & Temperature",
        // description:"lorem ipsum dolor sit amet, consectetur adip",
        // humidity:['Humidity: ',10],
        // temperature:['Temperature: ',30],
//     },

//     {
//         id:3,
//         icon:<FaFan />,
//         title:"Fan",
//         description:"lorem ipsum dolor sit amet, consectetur adip",
//         operation1:<button className="op" value={1} type="submit">ON</button>,
//         operation2:<button className="op" value={0} type="submit">OFF</button>
//     },
    // {
    //     id:4,
    //     icon:<IoPhoneLandscape />,
    //     title:"Soil Moisture",
    //     description:"lorem ipsum dolor sit amet, consectetur adip",
    //     soil:['Soil Moisture: ',7]
    // },
//     {
        // id:5,
        // icon:<LuCigarette />,
        // title:"Gar & Smoke",
        // description:"lorem ipsum dolor sit amet, consectetur adip",
        // status:['Status: ',7],
//     },
//     {
        // id:6,
        // icon:<FaFire />,
        // title:"Fire",
        // description:"lorem ipsum dolor sit amet, consectetur adip",
        // status: ['Status: ',1],   
//     },
//     {
        // id:7,
        // icon:<FaCloudSunRain />,
        // title:"Rain",
        // description:"lorem ipsum dolor sit amet, consectetur adip",
        // status: ['Status: ',1],   
//     },
//     {
//         id:8,
//         icon:<FaFaucetDrip />,
//         title:"Water Pump",
//         description:"lorem ipsum dolor sit amet, consectetur adip",
//         operation1:<button className="op" value={1} type="submit">ON</button>,
//         operation2:<button className="op" value={0} type="submit">OFF</button>  
//     }
// ]

// export default Data;

/////////////////////////////////////////////////////////////////
export const light = {
        id:1,
        icon:<FaRegLightbulb/>,
        title:"Light",
        description:"lorem ipsum dolor sit amet, consectetur adip",
        data:10,
} 

export const humidityTemperature = { 
        id:2,
        icon:<LiaTemperatureHighSolid />,
        title:"Humidity & Temperature",
        description:"lorem ipsum dolor sit amet, consectetur adip",
        humidity:['Humidity: ',10],
        temperature:['Temperature: ',30],
}

export const fan = {
    id:3,
    icon:<FaFan />,
    title:"Fan",
    description:"lorem ipsum dolor sit amet, consectetur adip",
    operation1:<button className="op" value={1} type="submit">ON</button>,
    operation2:<button className="op" value={0} type="submit">OFF</button>
}


export const SoilMoisture = {
        id:4,
        icon:<IoPhoneLandscape />,
        title:"Soil Moisture",
        description:"lorem ipsum dolor sit amet, consectetur adip",
        soil:['Soil Moisture: ',7]
}


export const GarSmoke = {
    id:5,
    icon:<LuCigarette />,
    title:"Gar & Smoke",
    description:"lorem ipsum dolor sit amet, consectetur adip",
    status:['Status: ',7]
}

export const fire = {
    id:6,
    icon:<FaFire />,
    title:"Fire",
    description:"lorem ipsum dolor sit amet, consectetur adip",
    status: ['Status: ',1],
}


export const rain = {
    id:7,
    icon:<FaCloudSunRain />,
    title:"Rain",
    description:"lorem ipsum dolor sit amet, consectetur adip",
    status: ['Status: ',1],
}


export const waterPump = {
    id:8,
    icon:<FaFaucetDrip />,
    title:"Water Pump",
    description:"lorem ipsum dolor sit amet, consectetur adip",
    operation1:<button className="op" value={1} type="submit">ON</button>,
    operation2:<button className="op" value={0} type="submit">OFF</button> 
}