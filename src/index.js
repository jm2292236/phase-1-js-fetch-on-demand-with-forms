const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");

        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector("section#movieDetails h4");
                title.innerText = data.title;
                const summary = document.querySelector("section#movieDetails p");
                summary.innerText = data.summary;
            });
    })
}

document.addEventListener('DOMContentLoaded', init);