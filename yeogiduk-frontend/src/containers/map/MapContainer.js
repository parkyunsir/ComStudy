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
        <RestLink href="http://localhost:3000/restaurant/1" style={{ top: '-150px', left: '550px' }}> {/* 사리원 */}
          <RestImage
            className="RestImage"
            alt="rest_01"
            src="/sariwon_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/1')} /* 사리원 */
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/25" style={{ top: '-380px', left: '400px' }}> {/* 붐떡 */}
          <RestImage
            className="RestImage"
            alt="rest_02"
            src="/boom_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/25')} /* 붐떡 */
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/19" style={{ top: '-320px', left: '530px' }}> {/* 블랙다운 */}
          <RestImage
            className="RestImage"
            alt="rest_03"
            src="/blackdown_icon.jpg"
            onClick={() => handleImageClick('http://localhost:3000/restaurant/19')} /* 블랙다운 */
          />
        </RestLink>
        <RestLink href="http://localhost:3000/restaurant/7"style={{ top: '-600px', left: '450px' }}> {/* 황금성 */}
          <RestImage 
              className="restImage" 
              alt="rest_04" 
              src="/goldencastle_icon.jpg" 
              onClick={() => handleImageClick('http://localhost:3000/restaurant/7')}/> {/* 황금성 */}
          </RestLink>
          <RestLink href="http://localhost:3000/restaurant/15" style={{ top: '-690px', left: '620px' }}>  {/* 파스타리까 */}
            <RestImage 
            className="restImage" 
            alt="rest_05" 
            src="/pastarica_icon.jpg" 
            onClick={() => handleImageClick('http://localhost:3000/restaurant/15')}/> {/* 파스타리까 */}
          </RestLink>
    </MapArea>
  );
};

export default Map;
