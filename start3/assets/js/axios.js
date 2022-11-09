// tabella completa
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

// tabella id 2
axios.get('https://jsonplaceholder.typicode.com/users/2')
    .then(function (response) {
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

// tabella nome nuovo aggiunto da me
axios.post('https://jsonplaceholder.typicode.com/users', { name: 'Jason Del Toro', username: 'JDT', email: 'jason@gmail.com' })
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

// nome eliminato
axios.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(function (response) {
        console.log(response);
        console.table(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })

