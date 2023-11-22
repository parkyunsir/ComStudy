import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MainTemplateBox = styled.div`
  top: 5rem;
  bottom: 5rem;
  background: #f1f3f5;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  margin-top: 3rem;
  overflow: hidden;
  position: relative;
`;

const BannerContainer = styled.div`
  display: flex;
  height: auto;
  max-height: 300px; /* 높이를 조절할 수 있는 값으로 설정 */
  transition: transform 1s ease-in-out;
`;

const BannerImage = styled.img`
  width: auto;
  height: auto;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  opacity: 0;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  opacity: 0;
`;

const MainBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  const images = ['map_banner.png', 'test_banner.png', 'main_banner.png'];
  const bannerContainerRef = useRef(null);

  // 함수: 다음 이미지로 이동
  const showNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    setResetTimer(true);
  };

  // 함수: 이전 이미지로 이동
  const showPrevImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    );
    setResetTimer(true);
  };

  // 이미지의 실제 세로 크기를 가져오기
  const handleImageLoad = () => {
    if (bannerContainerRef.current) {
      setImageHeight(bannerContainerRef.current.offsetHeight);
    }
  };

  // 초기 렌더링 시에도 isVisible 초기값 설정
  const bannerImages = images.map((image, index) => (
    <BannerImage
      isVisible={index === currentImageIndex}
      key={index}
      src={image}
      alt={`Banner Image ${index + 1}`}
      onLoad={handleImageLoad}
    />
  ));

  // 일정 시간 간격으로 다음 이미지로 자동 전환
  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
      setResetTimer(false);
    }, 4000); //이미지가 바뀌면 reset 후 4000 다시 시작

    // 컴포넌트가 언마운트될 때 clearInterval로 인터벌 해제
    return () => clearInterval(intervalId);
  }, [resetTimer]);

  return (
    <MainTemplateBox>
      <Banner>
        <BannerContainer
          ref={bannerContainerRef}
          style={{
            transform: `translateX(-${
              (currentImageIndex)
            }%)`,
            width: `${images.length}%`,
          }}
        >
          {bannerImages}
        </BannerContainer>
        <PrevButton onClick={showPrevImage}>&#10094;</PrevButton>
        <NextButton onClick={showNextImage}>&#10095;</NextButton>
      </Banner>
    </MainTemplateBox>
  );
};

export default MainBanner;
