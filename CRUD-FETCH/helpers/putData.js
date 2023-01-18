const putDataFetch = async (url, objeto) => {

    try {
        const option = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(objeto)
        }
        const response = await fetch(url, option);
        const resp = response.json();
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export default putDataFetch;