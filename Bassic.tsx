import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {initMetaSdk} from './Explorresyystm/service/metaSdk';
import { VolcSettingsProvider } from './Explorresyystm/Explorresyystmstrgg/explorresyystmcontxx';
import Exploresystmsystemstckk from './Explorresyystm/Explorresyystmroutees/Exploresystmsystemstckk';

const Bassic: React.FC = () => {
  useEffect(() => {
    initMetaSdk();
  }, []);

  
  return (
    <NavigationContainer>
      <VolcSettingsProvider>
        <Exploresystmsystemstckk />
      </VolcSettingsProvider>
    </NavigationContainer>
  );
};

export default Bassic;
