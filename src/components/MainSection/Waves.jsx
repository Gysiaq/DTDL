import React from "react";
import "./Waves.css";

function Waves() {
    return (
        <div className="waves">
            <svg
                className="wave-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#025464"
                    fillOpacity="1"
                    d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,149.3C672,117,768,75,864,58.7C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>

            <svg
                className=" wave wave-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#025464"
                    fillOpacity="0.5"
                    d="M0,64L48,74.7C96,85,192,107,288,149.3C384,192,480,256,576,250.7C672,245,768,171,864,144C960,117,1056,139,1152,160C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>

            <svg
                className=" wave wave-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#025464"
                    fillOpacity="0.25"
                    d="M0,320L48,309.3C96,299,192,277,288,250.7C384,224,480,192,576,197.3C672,203,768,245,864,266.7C960,288,1056,288,1152,282.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
}

export default Waves;
