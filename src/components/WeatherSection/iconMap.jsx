const DAY_ICONS = [
    { ids: [0, 1], icon: <i className="bi bi-sun-fill" />, desc: "Sunny" },
    {
        ids: [2],
        icon: <i className="bi bi-cloud-sun-fill" />,
        desc: "Cloudy",
    },
    { ids: [3], icon: <i className="bi bi-cloud-fill" />, desc: "Overcast" },
    {
        ids: [45, 48],
        icon: <i className="bi bi-cloud-fog2-fill" />,
        desc: "Foggy",
    },
    {
        ids: [51, 53, 55, 56, 57],
        icon: <i className="bi bi-cloud-drizzle-fill" />,
        desc: "Drizzle",
    },
    {
        ids: [61, 63, 65, 66, 67],
        icon: <i className="bi bi-cloud-rain-heavy-fill" />,
        desc: "Downpour",
    },
    {
        ids: [71, 73, 75, 77, 85, 86],
        icon: <i className="bi bi-cloud-snow-fill" />,
        desc: "Snow",
    },
    {
        ids: [80, 81, 82],
        icon: <i className="bi bi-cloud-rain-fill" />,
        desc: "Rain",
    },
    {
        ids: [95, 96, 99],
        icon: <i className="bi bi-cloud-lightning-rain-fill" />,
        desc: "Thunder",
    },
];

const NIGHT_ICONS = [
    {
        ids: [0, 1],
        icon: <i className="bi bi-moon-fill"></i>,
        desc: "Clear Sky",
    },
    {
        ids: [2],
        icon: <i className="bi bi-cloud-moon-fill"></i>,
        desc: "Cloudy",
    },
    {
        ids: [3],
        icon: <i className="bi bi-cloud-fill" />,
        desc: "Overcast",
    },
    {
        ids: [45, 48],
        icon: <i className="bi bi-cloud-fog2-fill" />,
        desc: "Foggy",
    },
    {
        ids: [51, 53, 55, 56, 57],
        icon: <i className="bi bi-cloud-drizzle-fill" />,
        desc: "Drizzle",
    },
    {
        ids: [61, 63, 65, 66, 67],
        icon: <i className="bi bi-cloud-rain-heavy-fill" />,
        desc: "Downpour",
    },
    {
        ids: [71, 73, 75, 77, 85, 86],
        icon: <i className="bi bi-cloud-snow-fill" />,
        desc: "Snow",
    },
    {
        ids: [80, 81, 82],
        icon: <i className="bi bi-cloud-rain-fill" />,
        desc: "Rain",
    },
    {
        ids: [95, 96, 99],
        icon: <i className="bi bi-cloud-lightning-rain-fill" />,
        desc: "Thunder",
    },
];

export const getIcons = (isDaytime) => (isDaytime ? DAY_ICONS : NIGHT_ICONS);

export const getWeatherDescriptors = (iconCode, isDaytime) =>
    getIcons(isDaytime)?.find((iconObj) => iconObj?.ids.includes(iconCode));
