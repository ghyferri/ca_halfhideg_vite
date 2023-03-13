import mapboxgl from 'mapbox-gl';

const address = document.querySelector('#address');
const loader = document.querySelector('#loader');

const apiKey = `pk.eyJ1IjoiZ2h5ZmVycmkiLCJhIjoiY2w5enZhNTA4MGkyeDNvbnZndmM3c2xxZCJ9.9Rb91ad-6c2O-qcLoEcaSQ`;
const lat = '51.21809387207031';
const lon = '4.408674240112305';

async function getAddress() {
  try {
    loader.style.display = 'block';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?&access_token=${apiKey}`;
    const response = await fetch(url);
    const json = await response.json();
    address.textContent = JSON.stringify(json.features[0].place_name)
      .split('"')
      .join('');
    loader.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

function loadMap() {
  mapboxgl.accessToken = `${apiKey}`;
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [`${lon}`, `${lat}`],
    zoom: 16,
  });
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'APPELSCENE & POPUP',
  );
  const marker = new mapboxgl.Marker({
    color: 'red',
    scale: 1.5,
    draggable: false,
  })
    .setLngLat([`${lon}`, `${lat}`])
    .addTo(map)
    .setPopup(popup);
  map.scrollZoom.disable();
}

export { getAddress, loadMap };
