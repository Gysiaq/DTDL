import React from "react";
import "./Quote.css";

function Quote() {
    return (
        <div>
            <div className="quote-container">
                <img
                    className="quote-image"
                    src={require("../../images/Mind map-cuate.png")}
                ></img>
                <div className="quote-div">
                    <h3 className="heading-3 quote-style">
                        “Great acts are made up of small deeds.” – Lao Tzu
                    </h3>
                </div>
            </div>

            <svg
                className="quote-waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 266"
            >
                <path
                    fill="#025464"
                    d="M0 13.5254L80 7.51412C160 1.50282 320 -10.5198 480 19.5367C640 49.5932 800 121.729 960 145.774C1120 169.819 1280 145.774 1440 121.729C1600 97.6836 1760 73.6384 1840 61.6158L1920 49.5932V266H1840C1760 266 1600 266 1440 266C1280 266 1120 266 960 266C800 266 640 266 480 266C320 266 160 266 80 266H0V13.5254Z"
                />
            </svg>

            <div className="images-license paragraph">
                <a href="https://storyset.com/work">
                    Work illustrations by Storyset
                </a>{" "}
                <a href="https://storyset.com/people">
                    People illustrations by Storyset
                </a>
            </div>
        </div>
    );
}

export default Quote;
