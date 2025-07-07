import { useEffect, useState } from "react";

const CountryCards = ({ name, flag, abbr }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            height: '200px',
            width: '200px',
            borderRadius: '10px',
            border: '1px solid gray'
        }}>
            <img src={flag} alt={`Flag of ${name} (${abbr})`} height={80} width={80} />
            <h2>{name}</h2>
        </div>
    );
};

const API = "https://xcountries-backend.azurewebsites.net/all";

export default function Countries() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(jsonData => setData(jsonData))
            .catch(err => {
                console.error("Error fetching data: ", err);
            });
    }, []);

    return (
        <div style={{
            height: "600px",
            overflowY: "scroll",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px"
        }}>
            {data.map(({ name, flag, abbr }) => (
                <CountryCards key={abbr} name={name} flag={flag} abbr={abbr} />
            ))}
        </div>
    );
}
