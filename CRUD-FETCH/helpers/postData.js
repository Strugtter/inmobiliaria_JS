const postDataFetch = async (url, objeto) => {
    try {
        const option = {
            method: "POST",
            body: JSON.stringify(objeto),
            headers:{"Content-type": "application/json; charset=UTF-8"}
        }

        const response = await fetch(url,option);
        const resp = await response.json();
        return resp        
    } catch (error) {
        console.log();
    }
}

export default postDataFetch;