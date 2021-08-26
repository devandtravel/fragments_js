function fetchData(url) {
    fetch(url, {
        headers: {
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7',
            'cache-control': 'max-age=0',
            'upgrade-insecure-requests': '1'
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'omit'
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there is a problem. Status Code: ' + response.status)
                return
            }

            response.json().then(function (data) {
                const root = document.querySelector('.root')
                root.innerHTML = JSON.stringify(data, null, 2)
                console.log(data)
            })
        })
        .catch(function (err) {
            const root = document.querySelector('.root')
            root.innerHTML = err
            console.log('Fetch Error :-S', err)
        })
}


const url = 'https://jsonplaceholder.typicode.com/users'
fetchData(url)
