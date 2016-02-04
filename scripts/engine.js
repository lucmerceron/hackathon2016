// Luc

function handleInputChange(element) {
  console.log(element.value);
}

var table = [
  "H", "Hydrogen", "1.00794", 1, 1,
  "He", "Helium", "4.002602", 18, 1,
  "Li", "Lithium", "6.941", 1, 2,
  "Be", "Beryllium", "9.012182", 2, 2,
  "B", "Boron", "10.811", 13, 2,
  "C", "Carbon", "12.0107", 14, 2,
  "N", "Nitrogen", "14.0067", 15, 2,
  "O", "Oxygen", "15.9994", 16, 2,
  "F", "Fluorine", "18.9984032", 17, 2,
  "Ne", "Neon", "20.1797", 18, 2,
  "Na", "Sodium", "22.98976...", 1, 3,
  "Mg", "Magnesium", "24.305", 2, 3,
  "Al", "Aluminium", "26.9815386", 13, 3,
  "Si", "Silicon", "28.0855", 14, 3,
  "P", "Phosphorus", "30.973762", 15, 3,
  "S", "Sulfur", "32.065", 16, 3,
  "Cl", "Chlorine", "35.453", 17, 3,
  "Ar", "Argon", "39.948", 18, 3,
  "K", "Potassium", "39.948", 1, 4,
  "Ca", "Calcium", "40.078", 2, 4,
  "Sc", "Scandium", "44.955912", 3, 4,
  "Ti", "Titanium", "47.867", 4, 4,
  "V", "Vanadium", "50.9415", 5, 4,
  "Cr", "Chromium", "51.9961", 6, 4,
  "Mn", "Manganese", "54.938045", 7, 4,
  "Fe", "Iron", "55.845", 8, 4,
  "Co", "Cobalt", "58.933195", 9, 4,
  "Ni", "Nickel", "58.6934", 10, 4,
  "Cu", "Copper", "63.546", 11, 4,
  "Zn", "Zinc", "65.38", 12, 4,
  "Ga", "Gallium", "69.723", 13, 4,
  "Ge", "Germanium", "72.63", 14, 4,
  "As", "Arsenic", "74.9216", 15, 4,
  "Se", "Selenium", "78.96", 16, 4,
  "Br", "Bromine", "79.904", 17, 4,
  "Kr", "Krypton", "83.798", 18, 4,
  "Rb", "Rubidium", "85.4678", 1, 5,
  "Sr", "Strontium", "87.62", 2, 5,
  "Y", "Yttrium", "88.90585", 3, 5,
  "Zr", "Zirconium", "91.224", 4, 5,
  "Nb", "Niobium", "92.90628", 5, 5,
  "Mo", "Molybdenum", "95.96", 6, 5,
  "Tc", "Technetium", "(98)", 7, 5,
  "Ru", "Ruthenium", "101.07", 8, 5,
  "Rh", "Rhodium", "102.9055", 9, 5,
  "Pd", "Palladium", "106.42", 10, 5,
  "Ag", "Silver", "107.8682", 11, 5,
  "Cd", "Cadmium", "112.411", 12, 5,
  "In", "Indium", "114.818", 13, 5,
  "Sn", "Tin", "118.71", 14, 5,
  "Sb", "Antimony", "121.76", 15, 5,
  "Te", "Tellurium", "127.6", 16, 5,
  "I", "Iodine", "126.90447", 17, 5,
  "Xe", "Xenon", "131.293", 18, 5,
  "Cs", "Caesium", "132.9054", 1, 6,
  "Ba", "Barium", "132.9054", 2, 6,
  "La", "Lanthanum", "138.90547", 4, 9,
  "Ce", "Cerium", "140.116", 5, 9,
  "Pr", "Praseodymium", "140.90765", 6, 9,
  "Nd", "Neodymium", "144.242", 7, 9,
  "Pm", "Promethium", "(145)", 8, 9,
  "Sm", "Samarium", "150.36", 9, 9,
  "Eu", "Europium", "151.964", 10, 9,
  "Gd", "Gadolinium", "157.25", 11, 9,
  "Tb", "Terbium", "158.92535", 12, 9,
  "Dy", "Dysprosium", "162.5", 13, 9,
  "Ho", "Holmium", "164.93032", 14, 9,
  "Er", "Erbium", "167.259", 15, 9,
  "Tm", "Thulium", "168.93421", 16, 9,
  "Yb", "Ytterbium", "173.054", 17, 9,
  "Lu", "Lutetium", "174.9668", 18, 9
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { grid: [] };

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // table

  for ( var i = 0; i < table.length; i += 5 ) {

    var element = document.createElement( 'div' );
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

    var number = document.createElement( 'div' );
    number.className = 'number';
    number.textContent = (i/5) + 1;
    element.appendChild( number );

    var symbol = document.createElement( 'div' );
    symbol.className = 'symbol';
    symbol.textContent = table[ i ];
    element.appendChild( symbol );

    var details = document.createElement( 'div' );
    details.className = 'details';
    details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
    element.appendChild( details );

    var object = new THREE.CSS3DObject( element );
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add( object );

    objects.push( object );

  }

  // grid

  for ( var i = 0; i < objects.length; i ++ ) {

    var object = new THREE.Object3D();

    object.position.x = ( ( i % 5 ) * 400 ) - 800;
    object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
    object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

    targets.grid.push( object );

  }

  //

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.position = 'absolute';
  document.getElementById( 'container' ).appendChild( renderer.domElement );

  controls = new THREE.TrackballControls( camera, renderer.domElement );
  controls.rotateSpeed = 0.5;
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener( 'change', render );

  transform( targets.grid, 2000 );

  window.addEventListener( 'resize', onWindowResize, false );

}

function transform( targets, duration ) {

  TWEEN.removeAll();

  for ( var i = 0; i < objects.length; i ++ ) {

    var object = objects[ i ];
    var target = targets[ i ];

    new TWEEN.Tween( object.position )
      .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
      .easing( TWEEN.Easing.Exponential.InOut )
      .start();

    new TWEEN.Tween( object.rotation )
      .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
      .easing( TWEEN.Easing.Exponential.InOut )
      .start();

  }

  new TWEEN.Tween( this )
    .to( {}, duration * 2 )
    .onUpdate( render )
    .start();

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

function animate() {

  requestAnimationFrame( animate );

  TWEEN.update();

  controls.update();

}

function render() {

  renderer.render( scene, camera );

}