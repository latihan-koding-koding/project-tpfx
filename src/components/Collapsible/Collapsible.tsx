import Text from '@components/Text/Text';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { CollapsibleProps } from './Collapsible.type';

interface ContentProps extends CollapsibleProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const CollapsibleContent = ({ open, title, content, defaultOpen, setOpen }: ContentProps) => {
  useEffect(() => {
    !defaultOpen ? setOpen(false) : setOpen(true);
  }, [setOpen, defaultOpen, title]);

  return (
    <>
      <div
        className={
          'flex justify-between w-full px-4 py-6 text-sm font-medium text-left outline-none'
        }
        onClick={() => setOpen(!open)}
      >
        <Text fontWeight={600} fontSize={24} className="text-primary-gray-5">
          {title}
        </Text>
        <ChevronUpIcon
          className={`${
            !open ? 'transform rotate-180' : ''
          } w-5 h-5  transition-all ease-in text-primary-gray-5`}
        />
      </div>
      <div
        className={`px-4 text-sm  rounded-t-none transition-all duration-75 overflow-hidden  ${
          !open ? 'h-0' : ' pb-9 '
        }`}
      >
        {content}
      </div>
    </>
  );
};

const Collapsible = (props: CollapsibleProps) => {
  const [open, setOpen] = useState(!!props.defaultOpen);
  return (
    <div className="mb-5 rounded-xl " style={{ backgroundColor: '#F7F7F7' }}>
      <CollapsibleContent {...{ open, setOpen, ...props }} />
    </div>
  );
};

export default Collapsible;
