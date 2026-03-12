const video = document.getElementById("coverVideo");
const overlay = document.getElementById("overlay");

// Fungsi utama untuk memunculkan teks
function munculkanTeks() {
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
}

// 1. CEK BERDASARKAN WAKTU (Ubah ke 6.32)
video.addEventListener("timeupdate", function() {
    if (video.currentTime >= 5.8) {
        munculkanTeks();
    } else {
        // Sembunyikan jika video diulang ke awal
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }
});

// 2. CEK JIKA VIDEO SELESAI (PENTING!)
// Kadang browser berhenti di detik 6.31, maka fungsi ini memaksanya muncul saat video habis
video.addEventListener("ended", function() {
    munculkanTeks();
});

// Logika ambil nama tamu
const params = new URLSearchParams(window.location.search);
const nama = params.get("to");
if(nama){
    document.getElementById("namaTamu").innerHTML = "Kepada Yth. " + nama;
}