let selection = figma.currentPage.selection;

if (selection.length > 0) {

  let parents = [];

  selection.forEach(function(selected) {
    if (selected.parent.type != "PAGE") {
      parents.push(selected.parent);
    }
  });

  figma.currentPage.selection = parents;
}

figma.closePlugin();