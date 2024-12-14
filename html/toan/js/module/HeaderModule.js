export default function HeaderModule() {
  const lang = document.querySelectorAll(".lang");
  const toggleHd = document.querySelector(".header-btn");
  const headerCT = document.querySelector(".header-menu");
  const hduser = document.querySelector(".header-user");
  const bg = document.querySelector(".bg-fade");
  if (lang.length > 0) {
    lang.forEach((ele, i) => {
      $(ele).click(function () {
        $(ele.querySelector(".lang-lst")).slideToggle("300", function () {
          // Animation complete.
        });
      });
    });
  }

  if (toggleHd) {
    toggleHd.addEventListener("click", () => {
      headerCT.classList.toggle("show");
      bg.classList.toggle("show");
      toggleHd.querySelector(".toggle-header").classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
    });
  }

  if (hduser) {
    hduser.addEventListener("click", () => {
      hduser.classList.toggle("active");
    });
  }

  document.addEventListener("click", (e) => {
    const isClickInsideElement = toggleHd.contains(e.target);
    if (
      e.target.matches(".header-menu, .header-menu *") ||
      isClickInsideElement
    ) {
      return;
    }
    headerCT.classList.remove("show");
    bg.classList.remove("show");
    toggleHd.querySelector(".toggle-header").classList.remove("active");
    document.body.classList.remove("overflow-hidden");
  });

  const addOutClass = () => {
    // var prevScrollpos = window.pageYOffset;
    // let hasScrolled = false;
    // if (prevScrollpos > 200.789 && !hasScrolled) {
    //   document.querySelector(".header").classList.add("out");
    //   hasScrolled = true;
    // } else {
    //   document.querySelector(".header").classList.remove("out");
    //   hasScrolled = false;
    // }

    const header = document.querySelector(".header");
    let isHeaderVisible = false;

    const addHD = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 250) {
        if (!isHeaderVisible) {
          header.classList.add("out");
          isHeaderVisible = true;
        }
      }
      if (scrollPosition <= 150) {
        if (isHeaderVisible) {
          header.classList.remove("out");
          isHeaderVisible = false;
        }
      }
    };

    addHD()

    window.addEventListener("scroll", addHD);
  };

  addOutClass();

  window.addEventListener("scroll", addOutClass);
}
