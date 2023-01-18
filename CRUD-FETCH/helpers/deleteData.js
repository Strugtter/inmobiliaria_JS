const deleteDataFetch = async (url)=>{
    try {
        const option = {
            method: 'DELETE',
        };
       const data = await fetch(url,option)
       return data;
    } catch (error) {
        console.log(error);
    }

}

export default deleteDataFetch;