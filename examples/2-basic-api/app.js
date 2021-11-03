const result = document.querySelector('.result')

const fetchData = async() => {
    try {
        const {data} = await axios.get('/api/basic-api')
        const people = data
            .map((person) => {
            const {name, img, bio} = person
            return `<article class="product">
                    <img
                    src=${img}
                    />
                    <div class="info">
                        <h5>${name}</h5>
                        <h5 class="price">${bio}</h5>
                    </div>
                </article>
            `
        }).join('')
        result.innerHTML = people
    } catch (error) {
        result.innerHTML = `<h2>Error</h2>`
    }
}

fetchData()