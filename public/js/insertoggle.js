(() => {
  // <stdin>
  (function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    function hideAllExcept(targetElement) {
      document.querySelectorAll(".hidden").forEach((element) => {
        if (element !== targetElement) {
          element.classList.add("close");
          element.classList.remove("open");
        }
      });
    }
    function toggleElement(targetElement) {
      const isHidden = targetElement.classList.contains("close");
      hideAllExcept(targetElement);
      targetElement.classList.toggle("close", !isHidden);
      targetElement.classList.toggle("open", isHidden);
    }
    toggleButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const targetIds = this.getAttribute("data-target").split(" ");
        targetIds.forEach((targetId) => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            toggleElement(targetElement);
          }
        });
      });
    });
  })();
})();
