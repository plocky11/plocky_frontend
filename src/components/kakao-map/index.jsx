import React, { useEffect, useState } from 'react';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import useKakaoMapLoader from './useKakaoMapLoader';
import trashCanMarker from '@/assets/icons/markers/trashCanMarker.png';
import locationMarker from '@/assets/icons/markers/locationMarker.png';
import {
  usePloggingActions,
  usePloggingStart,
  usePloggingValue,
} from '@/api/context/ploggingContext';
import theme from '@/styles/theme';
import instance from '@/api/instance';

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
  const add = usePloggingActions();
  const ploggingData = usePloggingValue();
  const [isPloggingStarted] = usePloggingStart();

  const watcher = navigator.geolocation.watchPosition(
    position => {
      setLocation(prev => ({
        ...prev,
        center: {
          lat: position.coords.latitude, // 위도
          lng: position.coords.longitude, // 경도
        },
        isLoading: false,
      }));
      add({
        lat: position.coords.latitude, // 위도
        lng: position.coords.longitude, // 경도
      });
    },
    err => {
      setLocation(prev => ({
        ...prev,
        errMsg: err.message,
        isLoading: false,
      }));
    },
    {
      enableHighAccuracy: true,
      timeout: 4000,
      maximumAge: 0,
    },
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/trashcan');
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
          add({
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          });
        },
        err => {
          setLocation(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
        {
          enableHighAccuracy: false,
          timeout: 4000,
          maximumAge: 0,
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setLocation(prev => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없습니다.',
        isLoading: false,
      }));
    }
    fetchData();
  }, []);

  const cleanUp = () => {
    navigator.geolocation && navigator.geolocation.clearWatch(watcher);
    localStorage.removeItem('plogging_path');
  };

  useEffect(() => {
    if (isPloggingStarted === true) watcher;

    return cleanUp;
  }, [isPloggingStarted]);

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
      {ploggingData && isPloggingStarted === true && (
        <Polyline
          path={[ploggingData]}
          strokeWeight={8} // 선의 두께 입니다
          strokeColor={theme.palette.green.dark} // 선의 색깔입니다
          strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'solid'} // 선의 스타일입니다
        />
      )}
    </Map>
  );
}
