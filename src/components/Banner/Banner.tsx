import { BannerPropsInterface } from './Banner.type';

const Banner = ({ children, bgType, bgUrl, className, opacity, id }: BannerPropsInterface) => {
  const opacityClass =
    opacity !== undefined ? 'opacity-' + opacity : bgType === 'video' ? 'opacity-30' : 'opacity-60';

  return (
    <div className={'relative bg-primary-gray-4 overflow-hidden flex -mt-1 ' + className} id={id}>
      <div className="max-w-7xl mx-auto flex-1 relative z-10 w-full">{children}</div>
      {bgType === 'video' ? (
        <video autoPlay loop muted className="absolute inset-y-0 right-0 w-full">
          <source src={bgUrl || ''} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-y-0 right-0 w-full"
          style={{
            backgroundImage: `url("${bgUrl}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      <div className={`absolute inset-y-0 right-0 w-full bg-primary-black-1 ${opacityClass}`} />
    </div>
  );
};

export default Banner;
