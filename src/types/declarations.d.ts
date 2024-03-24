declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}

declare module '*.ttf' {
    const content: ImageSourcePropType;
    export default content;
}

declare module '*.png' {
    const content: ImageSourcePropType;
    export default content;
}

declare module '*.jpg' {
    const content: ImageSourcePropType;
    export default content;
}

declare module '*.jpeg' {
    const content: ImageSourcePropType;
    export default content;
}

declare module '*.gif' {
    const content: ImageSourcePropType;
    export default content;
}
