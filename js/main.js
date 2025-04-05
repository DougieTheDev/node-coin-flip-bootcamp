document.querySelector('button').addEventListener('click', coinFlip);

function coinFlip(){
    makeReq();
}

function makeReq() {

    fetch(`/coinFlipGameApi`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector('p').textContent = data.result;
        })
        .catch(err => console.log('Fetch error', err));
}