document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/artists")
    .then((res) => res.json())
    .then((data) => {
      const gallery = document.getElementById("gallery");

      data.forEach((artist) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <img src="${artist.imageUrl}" alt="${artist.name}" width="200"/>
          <p><strong>${artist.name}</strong></p>
        `;
        gallery.appendChild(div);
      });
    })
    .catch((err) => console.error("Error:", err));
});
