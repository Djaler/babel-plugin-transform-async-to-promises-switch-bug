async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function doSomething() {
    try {
        await sleep(1000)
    } catch (e) {
        const errorCode = 2; //why not

        let message = 'Something wrong';

        switch (errorCode) {
            case 2:
                message = "Error 2"
                break
        }

        alert(message)
    }
}
