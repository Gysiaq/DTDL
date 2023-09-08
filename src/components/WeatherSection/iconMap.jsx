const ICONS = [
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

export const getWeatherDescriptors = (iconCode) =>
    ICONS.find((iconObj) => iconObj.ids.includes(iconCode));
