let users = ["Adriano", "Marcia", "Jose"];

function insertUser(name) {

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            users.push(name);

            let error = 0;

            if (!error) {
                resolve()
            } else {
                reject({msg: "Something wrong is not right"})
            }

        }, 500)
    })

    return promise
}

function printUsers() {
    console.log(users)
}

async function execute() {
    await insertUser("Thalysson");
    printUsers()
}

execute()
