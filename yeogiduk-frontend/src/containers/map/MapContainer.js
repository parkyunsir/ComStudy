import React from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  position: absolute;
  z-index: 1;
`;

const MapImage = styled.img`
  width: 100%; /* Make the map image fill the entire container */
`;

const RestLink = styled.a`
  position: relative;
  display: block;
  width: 60px; /* Adjust the width as needed */
  height: 60px; /* Adjust the height as needed */
`;

const RestImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  const handleImageClick = (link) => {
    window.location.href = link; // 클릭 시 링크로 이동
  };

  return (
    <MapArea>
      <MapImage className="mapImage" alt="map" src="/map1920.png" />
      <RestLink href="http://localhost:3000/restaurant/1" style={{ top: '-110px', left: '320px' }}>
        <RestImage
          className="restImage"
          alt="rest_01"
          src="/sariwon_icon.jpg"
          onClick={() => handleImageClick('http://localhost:3000/restaurant/1')}
        />
      </RestLink>
      <RestLink href="http://localhost:3000/restaurant/25" style={{ top: '-250px', left: '240px' }}>
        <RestImage
          className="restImage"
          alt="rest_02"
          src="/boom_icon.jpg"
          onClick={() => handleImageClick('http://localhost:3000/restaurant/25')}
        />
      </RestLink>
      <RestLink href="http://localhost:3000/restaurant/19" style={{ top: '-200px', left: '350px' }}>
        <RestImage
          className="restImage"
          alt="rest_03"
          src="/blackdown_icon.jpg"
          onClick={() => handleImageClick('http://localhost:3000/restaurant/19')}
        />
      </RestLink>
      <RestLink href="http://localhost:3000/restaurant/7"style={{ top: '-460px', left: '270px' }}>
            <div className="Rest4">
                <RestImage className="restImage" alt="rest_04" src="/goldencastle_icon.jpg" onClick={() => handleImageClick('http://localhost:3000/restaurant/7')}/>
            </div>
        </RestLink>

        <RestLink href="http://localhost:3000/restaurant/15" style={{ top: '-520px', left: '370px' }}>
            <div className="Rest5">
                <RestImage className="restImage" alt="rest_05" src="/pastarica_icon.jpg" onClick={() => handleImageClick('http://localhost:3000/restaurant/15')}/>
            </div>
        </RestLink>
      {/* Add more RestLink components for other restaurants */}
    </MapArea>
  );
};

export default Map;
