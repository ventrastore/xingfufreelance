// Data User
const users = [
    { 
        username: "calvinyulanda", 
        password: "calvin202624011", 
        nama: "Calvin Yulanda", 
        dashboard: "dashboard/user1.html" 
    },
    { 
        username: "jefri", 
        password: "jefri2152026", 
        nama: "Jefri", 
        dashboard: "dashboard/user2.html" 
    }
];

// Tunggu sampai DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah refresh halaman

            // Ambil value dari input
            const u = document.getElementById('username').value.trim();
            const p = document.getElementById('password').value.trim();

            // Cari user yang cocok
            const found = users.find(user => user.username === u && user.password === p);

            if (found) {
                // Simpan data ke sessionStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('currentUser', JSON.stringify(found));

                // Redirect ke dashboard
                console.log("Login Berhasil, mengalihkan...");
                window.location.href = found.dashboard;
            } else {
                // Notifikasi jika salah
                alert("Akses Ditolak! Username atau Password salah.");
                console.error("Login Gagal: Data tidak ditemukan.");
            }
        });
    } else {
        console.error("Error: Elemen 'loginForm' tidak ditemukan di HTML.");
    }
});
