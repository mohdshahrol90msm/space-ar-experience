AFRAME.registerComponent('planet-info', {
  schema: {
    name: {type: 'string'},
    fact: {type: 'string'},
    question: {type: 'string'},
    options: {type: 'array'},
    answer: {type: 'string'}
  },
  init: function () {
    this.el.addEventListener('click', () => {
      alert(
        `${this.data.name}\n\nFact: ${this.data.fact}\n\nTrivia: ${this.data.question}\nOptions: ${this.data.options.join(', ')}`
      );
    });
  }
});

document.querySelector('a-scene').innerHTML += `
  <a-entity id="venus" gltf-model="models/venus.glb" position="0 0 -3" scale="0.5 0.5 0.5"
    planet-info="name: Venus; fact: Venus is the hottest planet in the solar system.; question: What makes Venus so hot?; options: Greenhouse gases, Solar flares, Its size; answer: Greenhouse gases">
  </a-entity>
  <a-entity gltf-model="models/mars.glb" position="2 0 -3" scale="0.5 0.5 0.5"
    planet-info="name: Mars; fact: Mars is known as the Red Planet.; question: Why is Mars red?; options: Iron oxide, Water, Sand; answer: Iron oxide">
  </a-entity>
  <a-entity gltf-model="models/jupiter.glb" position="-2 0 -3" scale="0.5 0.5 0.5"
    planet-info="name: Jupiter; fact: Jupiter is the largest planet in our solar system.; question: How many moons does Jupiter have?; options: 79, 3, 12; answer: 79">
  </a-entity>
`;

window.addEventListener('load', () => {
  const resizeFactor = 0.1;
  const venus = document.querySelector('#venus');

  document.getElementById('scale-up').addEventListener('click', () => {
    let scale = venus.getAttribute('scale');
    scale.x += resizeFactor;
    scale.y += resizeFactor;
    scale.z += resizeFactor;
    venus.setAttribute('scale', scale);
  });

  document.getElementById('scale-down').addEventListener('click', () => {
    let scale = venus.getAttribute('scale');
    scale.x = Math.max(0.1, scale.x - resizeFactor);
    scale.y = Math.max(0.1, scale.y - resizeFactor);
    scale.z = Math.max(0.1, scale.z - resizeFactor);
    venus.setAttribute('scale', scale);
  });
});
