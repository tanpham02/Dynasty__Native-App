import { Flex } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native';

import { PATTERN } from '@/utils';

const InputVerify = () => {
  // FIXME: CREATE TYPE FOR BELOW STATE IT WILL LOOK BETTER
  const [inputState, setInputState] = useState<
    {
      value?: string;
      disable?: boolean;
    }[]
  >([]);
  // FIXME: CREATE TYPE FOR BELOW STATE IT WILL LOOK BETTER
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });

  const inputRefs = useRef<Array<TextInput>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const handleChangeTextInput = (value: string, index: number) => {
    const newInputState = [...inputState];
    if (!PATTERN.WHITE_SPACE.test(value)) {
      newInputState[index] = { value };
      setInputState(newInputState);
      if (index <= inputRefs.current.length - 1) {
        if (value) {
          inputRefs.current[index + 1]?.focus();
          return;
        }
        if (index === 0) {
          inputRefs.current[index]?.focus();
          return;
        }
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleIgnoreSpaceKey = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === ' ' || PATTERN.WHITE_SPACE.test(inputState[index]?.value)) {
      inputRefs.current[index]?.focus();
    }
  };

  return (
    <Flex className='w-full flex-row justify-between items-center my-8'>
      {[...new Array(6)].map((_, index) => (
        <TextInput
          ref={(ref) => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          maxLength={1}
          contextMenuHidden
          onChangeText={(value) => handleChangeTextInput(value, index)}
          onKeyPress={(e) => handleIgnoreSpaceKey(e, index)}
          className='text-center text-xl font-nunito-600 text-secondary w-[55px] h-[55px] border-2 border-[#d9d9d9] rounded-xl'
          selectTextOnFocus={false}
          selectionColor='black'
          value={inputState[index]?.value}
          keyboardType='numeric'
        />
      ))}
    </Flex>
  );
};

export default InputVerify;
// FIXME: MISSING index file to export this component
