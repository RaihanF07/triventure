
function submitForm() {
    var kon = confirm("Apakah Anda Yakin Untuk Memesan ? ");
    if (kon == true) {
        window.location.href = "berhasil.html";
    }
    else {
        window.history.forward();
    }
}

const testDiv = document.getElementById("test");
const deluxeDiv = document.getElementById("deluxe");
const StandardDiv = document.getElementById("Standard");

fetch("https://data-kamarku.vercel.app/kamar/suite")
    .then((res) => res.json())
    .then((res) => {
        console.log(res.data);
        res.data.map((kamar) => {
            testDiv.innerHTML += card(kamar.nama, kamar.harga, kamar.gambar, kamar.kode, kamar.rating)
        })
    })
fetch("https://data-kamarku.vercel.app/kamar/deluxe")
    .then((res) => res.json())
    .then((res) => {
        console.log(res.data);
        res.data.map((kamar) => {
            deluxeDiv.innerHTML += card(kamar.nama, kamar.harga, kamar.gambar, kamar.kode, kamar.rating)
        })
    })
fetch("https://data-kamarku.vercel.app/kamar/standar")
    .then((res) => res.json())
    .then((res) => {
        console.log(res.data);
        res.data.map((kamar) => {
            StandardDiv.innerHTML += card(kamar.nama, kamar.harga, kamar.gambar, kamar.kode, kamar.rating)
        })
    })

function card(nama, harga, gambar, kode, rating) {
    return `
        <div class="card">
            <img src="${gambar}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nama}</h5>
                <p class="card-text">${kode}</p>
                <p class="card-text">${rating}</p>
                <button type="button" class="btn btn-secondary" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">booking</button>
                RP. <span class="price">${harga}</span>
            </div>
        </div>`;
}

