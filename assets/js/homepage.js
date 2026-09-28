(() => {
  "use strict";

  // Preserve links shared from the previous template's generated headings.
  const legacyAnchors = {
    "-news": "news",
    "-publications": "publications",
    "-selected-publicationsfull-list": "publications",
    "-educations": "education",
    "-honors-and-awards": "honors",
    "-academic-service": "service",
    "tool-learning-agent": "publications",
    "large-language-model-reasoning": "publications"
  };

  const revealAnchor = () => {
    let hash;
    try {
      hash = decodeURIComponent(window.location.hash.slice(1)).replace(/\uFE0F/g, "");
    } catch (_) {
      return;
    }
    const target = document.getElementById(legacyAnchors[hash] || hash);
    if (!target) return;
    const archive = target.closest("details");
    if (archive) archive.open = true;
    if (archive || legacyAnchors[hash]) target.scrollIntoView();
  };
  revealAnchor();
  window.addEventListener("hashchange", revealAnchor);
})();
