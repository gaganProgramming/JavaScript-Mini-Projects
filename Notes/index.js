console.log("Start")

setTimeout(()=> console.log("Macrotask-setTimeout"),0);

Promise.resolve().then(() => {
    console.log("MicroTask1 -Promise");

    Promise.resolve().then(()=>console.log("MicroTask2 - Neseted"))
})

    console.log("Sync Task")
    setTimeout(()=> console.log("Macrotask"))
