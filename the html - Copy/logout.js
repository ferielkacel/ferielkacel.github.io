function disconnect() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Check if the cookie starts with the provided name
    if (cookie.startsWith("logged")) {
      // Get the cookie's name by splitting at the "=" sign
      const [name, value] = cookie.split("=");

      // Set the cookie's expiration date in the past to delete it
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

      alert(`user ${value} session ended.`);
      return;
    }
  }

  alert("you are not logged in to perform this action");
}
