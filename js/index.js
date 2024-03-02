
    function isLoggedIn(){
    return sessionStorage.getItem("Username") !== null;
}

    function LogOut(){
    sessionStorage.removeItem("Username");
    alert("Logged out successfully");
    window.location.href = "index.html"; // Redirect to index.html after logout
}
