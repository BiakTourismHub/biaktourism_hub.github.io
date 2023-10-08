document.addEventListener("DOMContentLoaded", function () {
    // Function to load and display page content
    async function loadPage(pageId) {
      try {
        const response = await fetch("data/data.json");
        const data = await response.json();
        const pageData = data[pageId];
  
        const container = document.getElementById("page-content");
  
        let contentHTML = `<h3>${pageData.title}</h3>`;
  
        if (pageData.content && pageData.content.imageURL) {
          // Tambahkan gambar jika imageURL tersedia
          contentHTML += `
            <div class="row justify-content-center">
              <div class="col-md-6 text-center">
                <img src="${pageData.content.imageURL}" alt="Gambar ${pageData.title}" class="img-fluid">
              </div>
            </div>
          `;
        }
  
        if (pageData.content && pageData.content.description) {
          // Tampilkan deskripsi jika deskripsi tersedia
          contentHTML += `
            <div class="row justify-content-center">
              <div class="col-md-6 text-center">
                <p>${pageData.content.description}</p>
              </div>
            </div>
          `;
        }
  
        container.innerHTML = contentHTML;
      } catch (error) {
        console.error(error);
      }
    }
  
    // Event listener for menu link clicks
    const menuLinks = document.querySelectorAll(".nav-link");
    menuLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const pageId = this.getAttribute("data-page-id");
        loadPage(pageId);
      });
    });
  
    // Initialize with the "page1" content
    loadPage("page1");
  });
  