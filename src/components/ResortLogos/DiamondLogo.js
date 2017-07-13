import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
} = Svg;

const DiamondLogo = ({ width = 60, height = 60 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <G fill="#4A4A4A" fill-rule="evenodd">
        <Path d="M18.108 43.94c2.9-.375 5.478-1.606 7.77-3.307 1.716-1.273 3.163-2.903 4.527-4.57 3.1-3.79 6.2-7.576 9.297-11.364.563-.688 1.11-1.39 1.774-1.985.69-.624 1.04-.64 1.79-.076.786.586 1.396 1.344 1.99 2.114 2.846 3.697 5.687 7.398 8.535 11.094.72.932 1.408 1.89 2.26 2.71 1.29 1.245 2.19 1.273 3.54.072.942-.84 1.79-1.773 2.58-2.756.557-.692 1.138-1.364 1.79-1.97 1.055-.98 1.614-.998 2.63.008.63.625 1.186 1.32 1.792 1.97 3.904 4.186 8.536 7.04 14.315 7.76 1.136.143 2.282.21 3.42.31-12.07-12.058-24.1-24.08-36.106-36.08C38.026 19.86 25.95 31.94 13.81 44.08c1.47.15 2.886.043 4.3-.14"/>
        <Path d="M14.835 53.466c4.205-.034 8.41-.052 12.616-.074 1.46-.008 2.768.395 3.948 1.3 1.945 1.488 3.9 2.965 5.753 4.57.176.15.368.286.568.404.928.547 1.322.523 2.05-.276 1.74-1.907 3.602-3.688 5.412-5.523.164-.166.323-.338.5-.486.775-.643 1.592-.9 2.558-.375 1.582.86 3.242 1.516 4.995 1.958 2.63.663 5.28.54 7.936.323 2.67-.22 5.337-.492 8.008-.697 6.787-.52 13.586-.633 20.388-.625l2.262-2.294h-.75c-3.74-.002-7.483 0-11.224-.01-2.49-.005-4.893-.46-7.257-1.277-4.31-1.488-8.144-3.675-11.198-7.118-.35-.394-.742-.756-1.137-1.104-1.123-.987-1.68-1-2.79.02-1.275 1.172-2.5 2.397-3.566 3.773-.31.4-.63.797-.983 1.16-.932.95-1.955.987-2.977.13-.41-.343-.727-.764-1.024-1.203-1.714-2.54-3.534-5.002-5.4-7.43-.45-.588-.913-1.166-1.523-1.6-.897-.64-1.452-.61-2.246.145-.815.774-1.46 1.696-2.163 2.566-2.9 3.598-5.935 7.023-10.138 9.22-3.423 1.79-7.04 2.692-10.863 2.8-2.6.074-8.445-.124-8.494-.08 8.61 8.613 17.44 17.273 26.012 25.85l.024-.116 4.61 4.69h23.515l12.208-12.19-3.05.372c-2.484-.08-4.678-.585-7.26-.34-2.186.207-4.368.442-6.547.698-4.083.48-7.95-.078-11.514-2.255-.966-.592-1.77-1.366-2.6-2.116-1.526-1.383-2.225-1.424-3.745-.034-1.232 1.126-2.32 2.397-3.417 3.655-.6.69-1.28 1.288-2.064 1.763-.708.43-1.422.453-2.167.07-1.16-.596-2.148-1.425-3.082-2.312-5.362-5.092-10.867-10.033-16.1-15.26-.15-.15-.33-.265-.496-.396.02-.052.042-.103.063-.155.783-.04 1.565-.112 2.348-.12"/>
        <Path d="M37.662 84.936h24.6l34.37-34.368-46.67-46.67-46.67 46.67 34.37 34.368zm25.565 2.33h-26.53L0 50.567 49.962.606l49.962 49.962-36.697 36.697z"/>
      </G>
    </Svg>
  );
}

export default DiamondLogo;