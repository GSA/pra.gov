var Glossary = require("glossary-panel");
var SmoothScroll = require("smooth-scroll");
var terms = require("../terms.json");

var body = document.querySelector(".usa-layout-docs-main_content");
if (body) {
  Object.keys(terms).forEach(function(key) {
    body.innerHTML = body.innerHTML.replace(
      terms[key].term,
      `<span data-term=${terms[key].term}>${terms[key].term}</span>`
    );
  });
}

function decorator(glossary) {
  var accordion = glossary.accordion;

  accordion.opts.collapseOthers = true;
  accordion.collapse = function(button) {
    var content = document.getElementById(button.getAttribute("aria-controls"));
    if (!content) return;
    button.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    this.setStyles(content);
  };
}

var g = new Glossary(terms);
decorator(g);

var scroll = new SmoothScroll('a[href*="#"]');