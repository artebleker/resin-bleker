
const x = true
const functionFetch = (time, task) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (x) {
                res(task);
            } else {
                rej("Error");
            }
        }, time);
    });
}

export default functionFetch;