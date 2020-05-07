const url="http://localhost:8900/articles";

export function articleNews(){
    const output= fetch(`${url}`,{method:'GET'})
    .then((data)=> data.json())

    return {
        type: 'GET_Articles',
        payload: output
    }
}