const getSusupender = (promise:Promise<any>) =>{
    let status = "pending"
    let response:any
    const suspender = promise.then(
        (res) =>{
            status = "success"
            response = res
        },
        (err) =>{
            status = "error"
            response = err
        }
        )
    
    const read:any = () =>{
        switch (status) {
            case "pending":
                throw suspender
            case "error":
                throw response
            default:
                return response
        }
    }
    return {read}
}

export function fetchData(url:string){
    const promise = fetch(url)
    .then(response => response.json())
    .then((json) =>json)

    return getSusupender(promise)
}