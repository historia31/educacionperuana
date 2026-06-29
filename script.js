(function () {

  const SECTIONS = {
    portada:    { title: "Universidad Nacional de Trujillo", sub: "Educación Secundaria Historia y Geografía", historical: false },
    prado:      { title: "HISTORIA DE LA EDUCACIÓN PERUANA", sub: "1939 – 1945",    historical: true  },
    bustamante: { title: "HISTORIA DE LA EDUCACIÓN PERUANA", sub: "1945 – 1948",    historical: true  },
    odria:      { title: "HISTORIA DE LA EDUCACIÓN PERUANA", sub: "1948 – 1956",    historical: true  },
    prado2:     { title: "HISTORIA DE LA EDUCACIÓN PERUANA", sub: "1956 – 1962",    historical: true  },
  };

  const ORDER = ["portada", "prado", "bustamante", "odria", "prado2"];

  const pages     = document.querySelectorAll(".page");
  const presItems = document.querySelectorAll(".pres-item");
  const titleText = document.getElementById("bannerTitleText");
  const titleSub  = document.getElementById("bannerTitleSub");
  let current = "portada";

  function showSection(id) {
    if (!SECTIONS[id]) return;
    current = id;
    const info = SECTIONS[id];

    pages.forEach(function (p) {
      p.classList.toggle("active", p.id === id);
    });

    titleText.textContent = info.title;
    titleSub.textContent  = info.sub;

    if (info.historical) {
      document.body.classList.add("in-history");
    } else {
      document.body.classList.remove("in-history");
    }

    presItems.forEach(function (item) {
      item.classList.toggle("active", item.dataset.section === id);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-section]");
    if (btn) showSection(btn.dataset.section);
  });

  document.addEventListener("keydown", function (e) {
    const idx = ORDER.indexOf(current);
    if (e.key === "ArrowRight" && idx < ORDER.length - 1) showSection(ORDER[idx + 1]);
    if (e.key === "ArrowLeft"  && idx > 0)               showSection(ORDER[idx - 1]);
  });

})();
