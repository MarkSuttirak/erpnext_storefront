
const sendcallforphone = (phone) => {


}


const phonverifynow = (phone) => {
    try {
        return fetch("https://dev.zaviago.com/api/method/honda_api.api_calls.verifyuser.getphone?userphone="+phone, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => response.json()).then((data) => {
            return data;
        })

    } catch (error) {
        return error;
    }
}

export { phonverifynow };
