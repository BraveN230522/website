function addYourLocationButton(map, maps) {
  const controlDiv = document.createElement('div');

  const firstChild = document.createElement('button');
  firstChild.style.backgroundColor = '#fff';
  firstChild.style.border = 'none';
  firstChild.style.outline = 'none';
  firstChild.style.width = '40px';
  firstChild.style.height = '40px';
  firstChild.style.borderRadius = '2px';
  firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
  firstChild.style.cursor = 'pointer';
  firstChild.style.marginRight = '10px';
  firstChild.style.padding = '0';
  firstChild.title = 'Your Location';
  controlDiv.appendChild(firstChild);

  const secondChild = document.createElement('div');
  secondChild.style.margin = '5px';
  secondChild.style.marginLeft = '10px';
  secondChild.style.width = '18px';
  secondChild.style.height = '18px';
  secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
  secondChild.style.backgroundSize = '180px 18px';
  secondChild.style.backgroundPosition = '0 0';
  secondChild.style.backgroundRepeat = 'no-repeat';
  firstChild.appendChild(secondChild);

  maps.event.addListener(map, 'center_changed', () => {
    secondChild.style['background-position'] = '0 0';
  });

  firstChild.addEventListener('click', () => {
    let imgX = '0';
    const animationInterval = setInterval(() => {
      imgX = imgX === '-18' ? '0' : '-18';
      secondChild.style['background-position'] = `${imgX}px 0`;
    }, 500);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latlng = new maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(latlng);
        clearInterval(animationInterval);
        secondChild.style['background-position'] = '-144px 0';
      });
    } else {
      clearInterval(animationInterval);
      secondChild.style['background-position'] = '0 0';
    }
  });

  controlDiv.index = 1;
  map.controls[maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}

export default addYourLocationButton;
