const users = [
    { username: "calvinyulanda", password: "calvin202624011", nama: "Calvin Yulanda", kota: "Malang", dashboard: "dashboard/user1.html" },
    { username: "jihan123", password: "4567", nama: "Siti Aminah", kota: "Bandung", dashboard: "dashboard/user2.html" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    const found = users.find(user => user.username === u && user.password === p);

    if (found) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('currentUser', JSON.stringify(found));
        window.location.href = found.dashboard;
    } else {
        alert("Akses Ditolak!");
    }
});