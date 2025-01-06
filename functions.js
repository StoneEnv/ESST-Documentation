document.addEventListener("click", function (event) {
  if (event.target.matches(".lightbox-image")) {
    // console.warn({ event, src: event.target.src });

    // update the title with the alt (if it exists)
    document.getElementById("lightbox_modal_title").innerText = event.target.alt
      ? event.target.alt
      : "";

    // set the modal img src
    document.getElementById("lightbox_modal_img").src = event.target.src;

    // open the modal
    lightbox_modal.showModal();
  }
});
