import React from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
  position: absolute;
  z-index: 1;
`;

const MapImage = styled.img`
  width: 100%;
`;

const RestLink = styled.a`
  position: relative;
  display: block;
  width: 60px; 
  height: 60px;
  z-index: 2;
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
        <RestLink href="http://localhost:3000/restaurant/1" style={{ top: '120px', left: '320px' }}>
          <RestImage
            className="RestImage"
            alt="rest_01"
            src="/sariwon_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/1')}
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/25" style={{ top: '300px', left: '240px' }}>
          <RestImage
            className="RestImage"
            alt="rest_02"
            src="/boom_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/25')}
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/19" style={{ top: '200px', left: '350px' }}>
          <RestImage
            className="RestImage"
            alt="rest_03"
            src="/blackdown_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/19')}
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/7"style={{ top: '-60px', left: '270px' }}>
          <RestImage 
              className="restImage" 
              alt="rest_04" 
              src="/goldencastle_icon.jpg" 
              onClick={() => handleImageClick('http://localhost:3000/restaurant/7')}/>
          </RestLink>
          <RestLink href="http://localhost:3000/restaurant/15" style={{ top: '-120px', left: '380px' }}>
            <RestImage 
            className="restImage" 
            alt="rest_05" 
            src="/pastarica_icon.jpg" 
            onClick={() => handleImageClick('http://localhost:3000/restaurant/15')}/>
          </RestLink>
    </MapArea>
  );
};

export default Map;
