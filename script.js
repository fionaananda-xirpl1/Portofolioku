const toggle = document.getElementById("themeToggle");

// cek saat pertama load
if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
  toggle.textContent = "☀️"; // kalau dark → tampil matahari
} else {
  toggle.textContent = "🌙"; // kalau light → tampil bulan
}

// klik tombol
toggle.onclick = () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
};

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let email = document.getElementById("email").value.trim();
  let pesan = document.getElementById("pesan").value.trim();
  let msg = document.getElementById("formMessage");

  if(nama === "" || email === "" || pesan === ""){
    msg.style.color = "red";
    msg.textContent = "Semua field wajib diisi!";
    return;
  }

  if(!email.includes("@")){
    msg.style.color = "red";
    msg.textContent = "Email tidak valid!";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Pesan berhasil dikirim!";

  document.getElementById("contactForm").reset();
});

// ================= SCROLL ANIMATION =================
function revealOnScroll(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// biar langsung aktif saat pertama load
revealOnScroll();

// ================= TYPING ABOUT =================
const aboutText = "Saya mahasiswa semester 2 yang sedang menempuh pendidikan di Fakultas Sains dan Teknologi, Program Studi Teknologi Informasi UIN Walisongo. Saya tertarik pada dunia pemrograman dan ingin terus mengembangkan skill di bidang ini.";

let index = 0;
const speed = 40;

function typeAbout(){
  if(index < aboutText.length){
    document.getElementById("aboutTyping").innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeAbout, speed);
  }
}

// trigger saat section terlihat
let aboutPlayed = false;

function triggerTyping(){
  const aboutSection = document.getElementById("about");
  const position = aboutSection.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if(position < screen - 100 && !aboutPlayed){
    typeAbout();
    aboutPlayed = true;
  }
}

window.addEventListener("scroll", triggerTyping);