(function () {
  var LANG_KEY = "resume-lang";
  var defaultLang = "pt";

  function applyLanguage(lang) {
    var targetLang = lang === "en" ? "en" : "pt";
    var blocks = document.querySelectorAll("[data-lang]");
    var btnPt = document.getElementById("btn-pt");
    var btnEn = document.getElementById("btn-en");

    function displayFor(el) {
      if (el.tagName === "LI") {
        return "list-item";
      }

      if (el.tagName === "SPAN" || el.tagName === "A") {
        return "inline";
      }

      return "block";
    }

    blocks.forEach(function (el) {
      var isTarget = el.getAttribute("data-lang") === targetLang;
      el.style.display = isTarget ? displayFor(el) : "none";
    });

    btnPt.classList.toggle("is-active", targetLang === "pt");
    btnEn.classList.toggle("is-active", targetLang === "en");
    btnPt.setAttribute("aria-pressed", String(targetLang === "pt"));
    btnEn.setAttribute("aria-pressed", String(targetLang === "en"));
    document.documentElement.lang = targetLang === "pt" ? "pt-BR" : "en";
  }

  function getInitialLanguage() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "pt" || stored === "en") {
      return stored;
    }

    return defaultLang;
  }

  function setLanguage(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-set-lang"));
    });
  });

  applyLanguage(getInitialLanguage());
})();