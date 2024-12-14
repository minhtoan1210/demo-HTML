export default function MenuModule() {
  try {
    const listDr = document.querySelectorAll(".dropdown");

    listDr.forEach((ele, i) => {
      const icon = document.createElement("i");
      // <i class="fas fa-angle-down"></i>
      icon.className = "fas fa-chevron-down";
      ele.querySelectorAll("a")[0].appendChild(icon);
      icon.addEventListener("click", (e) => {
        e.preventDefault();
        icon.classList.toggle("active");
        $(ele.querySelectorAll(".menu-list")[0])
          .stop()
          .slideToggle(300, "linear");
      });
    });
  } catch (error) {
    console.log(error);
  }
}
