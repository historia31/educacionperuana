(function () {

  const SECTIONS = {
    portada:     { title: "Universidad Nacional de Trujillo",    sub: "Educación Secundaria Historia y Geografía", historical: false },
    cangallo:    { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "El primer globo terrestre en Cangallo",      historical: true  },
    leguia:      { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1919 – 1930",                                historical: true  },
    indigenismo: { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "Educación rural e indigenismo",              historical: true  },
    benavides:   { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1933 – 1939",                                historical: true  },
    prado:       { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1939 – 1945",                                historical: true  },
    bustamante:  { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1945 – 1948",                                historical: true  },
    odria:       { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1948 – 1956",                                historical: true  },
    prado2:      { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1956 – 1962",                                historical: true  },
    lindley:     { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "3 de marzo al 28 de julio de 1963",          historical: true  },
    belaunde:    { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1963 – 1968",                                historical: true  },
    velasco:     { title: "HISTORIA DE LA EDUCACIÓN PERUANA",   sub: "1968 – 1975",                                historical: true  },
  };

  const ORDER = ["portada","cangallo","leguia","indigenismo","benavides","prado","bustamante","odria","prado2","lindley","belaunde","velasco"];

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

    /* Desplazar el botón activo al centro de la barra de navegación */
    var activeBtn = document.querySelector('.pres-item[data-section="' + id + '"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-section]");
    if (btn) showSection(btn.dataset.section);
  });

  document.addEventListener("keydown", function (e) {
    var idx = ORDER.indexOf(current);
    if (e.key === "ArrowRight" && idx < ORDER.length - 1) showSection(ORDER[idx + 1]);
    if (e.key === "ArrowLeft"  && idx > 0)               showSection(ORDER[idx - 1]);
  });

})();
