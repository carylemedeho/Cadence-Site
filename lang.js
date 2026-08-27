(function () {
  var KEY = "cadence.site.lang";
  var body = document.body;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function remember(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {
      /* private browsing — the choice simply does not persist */
    }
  }

  function apply(lang) {
    body.setAttribute("data-active", lang);
    document.documentElement.lang = lang;
    var buttons = document.querySelectorAll(".langbar button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        "aria-pressed",
        buttons[i].getAttribute("data-set") === lang ? "true" : "false"
      );
    }
  }

  function preferred() {
    var saved = stored();
    if (saved === "fr" || saved === "en") {
      return saved;
    }
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }

  apply(preferred());

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".langbar button");
    if (!button) {
      return;
    }
    var lang = button.getAttribute("data-set");
    remember(lang);
    apply(lang);
  });
})();
