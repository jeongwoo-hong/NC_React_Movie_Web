import { useEffect, useState } from "react";

function App5() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => console.log(json))
    }, [])
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? <strong>Loading...</strong> : null}
        </div>

    )
}