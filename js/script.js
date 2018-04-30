var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'.toUpperCase();
var charAmount = Math.round(text.length / 2);

console.log(text.replace('Velociraptor', dinosaur).slice(0, charAmount));

