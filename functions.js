document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    if (event.target.matches(".lightbox-image")) {
      // console.warn({ event, src: event.target.src });

      // update the title with the alt (if it exists)
      document.getElementById("lightbox_modal_title").innerText = event.target
        .alt
        ? event.target.alt
        : "";

      // set the modal img src
      document.getElementById("lightbox_modal_img").src = event.target.src;

      // open the modal
      lightbox_modal.showModal();
    }
  });
});

// //Change color on click
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("#scroll-links a");

//   links.forEach((link) => {
//     link.addEventListener("click", function () {
//       links.forEach((link) => link.classList.remove("active"));
//       this.classList.add("active");
//     });
//   });
// });

// // Modal

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("#scroll-links a");

//   links.forEach((link) => {
//     link.addEventListener("click", function () {
//       links.forEach((link) => link.classList.remove("active"));
//       this.classList.add("active");
//     });
//   });

//   // Modal functionality
//   const modal = document.querySelector(".modal");
//   const modalImg = document.querySelector(".modal-content");
//   const closeBtn = document.querySelector(".close");
//   const images = document.querySelectorAll("img[id^='myImg']");

//   images.forEach((img) => {
//     img.addEventListener("click", function () {
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt; // Set the caption text to the alt attribute of the image
//     });
//   });

//   closeBtn.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   // Close modal when clicking outside of the image
//   window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });
