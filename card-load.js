var designsDivision = document.getElementById("Designs-Cards");
var projectsDivision = document.getElementById("Projects-Cards");

for (design in designs) {
    var designCardTemplate = `<div class="Card"><a href=""><div class="Card-Showcase"><img src="${designs[design]["showcaseURL"]}" alt="An entity for Card's Showcase" class="Card-Showcase-Entity"></div><div class="Card-Body"><p class="Card-Heading">${designs[design]["cardHeading"]}</p><p class="Card-Date">${designs[design]["cardDate"]}</p><p class="Card-Description">${designs[design]["cardDescription"]}</p><div class="Card-Horizontal-Line"></div><div class="Card-Tags"><p class="Card-Tag">${designs[design]["cardTag1"]}</p><p class="Card-Tag">${designs[design]["cardTag2"]}</p><p class="Card-Tag">${designs[design]["cardTag3"]}</p><p class="Card-Tag">${designs[design]["cardTag4"]}</p><p class="Card-Tag">${designs[design]["cardTag5"]}</p></div><div class="Card-Horizontal-Line"></div>${designs[design]["cardAttribution"]}</div></a></div>`;
    designsDivision.insertAdjacentHTML("beforeend", designCardTemplate);
}

for (project in projects) {
    var projectsCardTemplate = `<div class="Card"><a href="${projects[project]["cardLink"]}" target="_black"><div class="Card-Showcase"><img src="${projects[project]["showcaseURL"]}" alt="An entity for Card's Showcase" class="Card-Showcase-Entity"></div><div class="Card-Body"><p class="Card-Heading">${projects[project]["heading"]}</p><p class="Card-Date">${projects[project]["date"]}</p><p class="Card-Description">${projects[project]["description"]}</p><div class="Card-Horizontal-Line"></div><div class="Card-Tags"><p class="Card-Tag">${projects[project]["tag1"]}</p><p class="Card-Tag">${projects[project]["tag2"]}</p><p class="Card-Tag">${projects[project]["tag3"]}</p><p class="Card-Tag">${projects[project]["tag4"]}</p><p class="Card-Tag">${projects[project]["tag5"]}</p></div><div class="Card-Horizontal-Line"></div><a class="Card-Source-Link" href="${projects[project]["projectSourceCodeLink"]}" target="_black">Link to the ${projects[project]["sourceCodeStoragePlatform"]}</a></div></a></div>`;
    projectsDivision.insertAdjacentHTML("beforeend", projectsCardTemplate);
}