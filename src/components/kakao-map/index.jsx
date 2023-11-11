import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useKakaoMapLoader from './useKakaoMapLoader';
import trashCanMarker from '@/assets/icons/markers/trashCanMarker.png';
import locationMarker from '@/assets/icons/markers/locationMarker.png';
import instance from '@/api/auth';

export default function KakaoMap() {
  useKakaoMapLoader();
  const [location, setLocation] = useState({
    center: {
      lat: 37.4025352267,
      lng: 127.10082686151,
    },
    errMsg: null,
    isLoading: true,
  });
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/trash');
        setPositions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching trash can data:', error);
      }
    };

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setLocation(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
      fetchData();
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocation(prev => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없습니다.',
        isLoading: false,
      }));
    }
  }, []);

  return (
    <Map
      center={location.center}
      style={{ width: '100%', height: '100vh' }}
      level={3}
    >
      {positions.map((position, index) => (
        <MapMarker
          key={`${position.title}-${index}`}
          position={{ lat: position.latitude, lng: position.longitude }}
          image={{
            src: trashCanMarker,
            size: {
              width: 36,
              height: 44,
            },
          }}
          title={`Trash Can ${position.trashcanId}`}
        />
      ))}
      <MapMarker // 마커를 생성합니다
        position={location.center}
        image={{
          src: locationMarker,
          size: {
            width: 40,
            height: 40,
          }, // 마커이미지의 크기입니다
        }}
      />
    </Map>
  );
}
