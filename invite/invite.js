(function () {
  var token = new URLSearchParams(window.location.search).get("token");
  var valid = token && /^[2-9A-HJ-NP-Za-hj-np-z-]{4,32}$/.test(token);
  var invite = document.querySelector(".invite");
  var missing = document.querySelector(".missing");
  var copied = document.querySelector("[data-copied]");

  if (!valid) {
    missing.hidden = false;
    return;
  }
  invite.hidden = false;

  function fallbackCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    try {
      document.execCommand("copy");
    } catch (e) {
      /* the invitation stays in the address bar */
    }
    document.body.removeChild(field);
  }

  document.querySelector("[data-copy]").addEventListener("click", function () {
    var text = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
    copied.hidden = false;
  });
})();
