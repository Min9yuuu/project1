const gap = 400;

function sticky() {
  const scMenu = document.querySelector(".scroll_menu");
  const menuText = document.querySelectorAll(".scroll_menu li");
  const headTitle = document.querySelector("#header_wrap");
  const contBox = document.querySelectorAll(".scroll_box");

  window.addEventListener("scroll", function () {
    let scrollTop;
    scrollTop = window.scrollY;
    animate(scrollTop);
  });
  const animate = (sct) => {
    contBox.forEach((el, idx) => {
      let sectiontop = el.offsetTop;
      if (sct > sectiontop - gap) {
        cOnOff(menuText, menuText[idx]);
      }
    });
    sct >= headTitle.clientHeight + gap ? scMenu.classList.add("sticky") : scMenu.classList.remove("sticky");
  };
  function cOnOff(obj, el) {
    obj.forEach((el) => {
      el.classList.remove("on");
    });
    el.classList.add("on");
  }
}
sticky();
