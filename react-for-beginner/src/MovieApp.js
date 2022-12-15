import { useEffect, useState } from "react";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {}, [])
    return <div>
        {loading ? <h1>Loading...</h1> : null}
    </div>
}

export default MovieApp;