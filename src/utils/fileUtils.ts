import RNFS from 'react-native-fs';

export const removeCacheAfterUploadFile = (filePath: string) => {
  if (filePath) {
    RNFS.exists(filePath).then(res => {
      if (res) {
        RNFS.unlink(filePath).then(() => console.log('FILE CACHE DELETED'));
      }
    });
  }
};
