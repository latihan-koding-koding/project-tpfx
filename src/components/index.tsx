import Text from '@components/Text/Text';

export const PaginationItem = ({
  isActive,
  pageNumber,
  onClick
}: {
  isActive: boolean;
  pageNumber: number | string;
  onClick?: () => void;
}) => (
  <div
    className={`${pageNumber === '...' ? '' : 'cursor-pointer'} rounded-md mx-1 flex ${
      isActive ? 'bg-primary-gold-1 text-white' : 'bg-secondary-gray-6 text-black'
    }`}
    style={{ width: 40, height: 40 }}
    onClick={pageNumber === '...' ? undefined : onClick}
  >
    <Text fontWeight={600} className="m-auto">
      {pageNumber}
    </Text>
  </div>
);
