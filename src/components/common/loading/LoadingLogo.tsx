import Image from 'next/image';
import logoAura from '../../../statics/icons/logo_aura.png';
const LoadingLogo = () => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/20 p-8">
      <div className="overflow-auto h-full">
        <div className="flex justify-center items-center h-full w-full">
          <div className="absolute">
            <div className="absolute">
              <Image
                src={logoAura}
                width={200}
                height={200}
                alt="login"
              />
            </div>
            <div className="spin spinner flex items-center justify-center border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoadingLogo;
