import RenderHtml from 'react-native-render-html';

import { SecondLayout } from 'src/components/Layout';
import { widthScreen } from 'src/utils/systemUtils';
import styles from './styles';
import { ScrollView } from 'react-native';

const AboutUsScreen = () => {
  const html = `<p>Túc Tắc Tea được thành lập vào năm 2012 với đội ngũ giàu kinh nghiệm, tràn đầy nhiệt huyết.&nbsp;</p><p>Túc Tắc Tea mang trong mình sứ mệnh và tầm nhìn như sau:</p><p>&nbsp;1. TÚC TẮC TEA EVERYWHERE, EVERYDAY</p><p>&nbsp;2. Chuỗi trà sữa rạng danh thương hiệu Quốc gia</p><p>&nbsp;3. Tự hào trà sữa Việt Nam trên trường quốc tế</p><p>&nbsp;4. Xây dựng một tổ chức vĩ đại</p><p><br></p>`;

  return (
    <SecondLayout title="Về chúng tôi" style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RenderHtml contentWidth={widthScreen} source={{ html }} />
      </ScrollView>
    </SecondLayout>
  );
};

export default AboutUsScreen;
