document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const package = document.getElementById("package");

    const orderInfo = document.getElementById("orderInfo");
    orderInfo.textContent = 'Pemesanan oleh:Name ${name}, Email: ${email}, Phone: ${phone}, Paket: ${package}';
    alert('Nama: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage: ${package}');
});

