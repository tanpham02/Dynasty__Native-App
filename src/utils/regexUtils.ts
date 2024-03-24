const PATTERN = {
  PHONE_NUMBER: new RegExp('((^(\\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$'),
  EMAIL: new RegExp('^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$'),
  FULL_NAME:
    /^[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ A-VXYỲỌÁẦẢẤỜỄÀẠẰỆẾÝỘẬỐŨỨĨÕÚỮỊỖÌỀỂẨỚẶÒÙỒỢÃỤỦÍỸẮẪỰỈỎỪỶỞÓÉỬỴẲẸÈẼỔẴẺỠ]{1,}$/gm,
  WHITE_SPACE: /\s/,
};

export default PATTERN;
