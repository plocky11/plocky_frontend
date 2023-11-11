import React from 'react';
import level0 from '../assets/icons/characters/level0.png';
import level1 from '../assets/icons/characters/level1.png';
import level2 from '../assets/icons/characters/level2.png';
import level3 from '../assets/icons/characters/level3.png';
import level4 from '../assets/icons/characters/level4.png';
import level5 from '../assets/icons/characters/level5.png';


export default function PetLevel({ level }) {
  const getLevelImage = () => {
    switch (level) {
      case 0:
        return level0;
      case 1:
        return level1;
      case 2:
        return level2;
      case 3:
        return level3;
      case 4:
        return level4;
      case 5:
        return level5;
      default:
        return level0;
    }
  };

  return (
    <>
      <img
        src={getLevelImage()}
        alt={`Level ${level}`}
        width={'100%'}
        height={'100%'}
      />
    </>
  );
}
