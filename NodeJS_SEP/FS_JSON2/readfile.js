const fs = require

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err
    let users = JSON.parse(data)
    let male_users = []
    let female_users = []

    for (user of users) {
        if (user.gender === 'Male') {
            male_users.push(user)
        }
        if (user.gender === 'Female') {
            female_users.push(user)
        }
    }
    console.log("Male Users:",male_users.length)
    console.log("Female Users:",male_users.length)
})