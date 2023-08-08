import ModalFormAdvisory from '@/components/home/card-service-advisory/ModalFormAdvisory';
import FormContactSmall from '../form-contact/FormContactAdvisory';

interface CardServiceAdvisory {
  setIsAdviceCard: (e: boolean) => void;
}
const CardServiceAdvisory = ({ setIsAdviceCard }: CardServiceAdvisory) => {
  return (
    <div className="w-[400px]  h-fit rounded-lg">
      <ModalFormAdvisory
        onCancel={() => {
          setIsAdviceCard(false);
        }}
        width={'450px'}>
        <div className="lg:mt-[20px] mt-[10px]">
          <FormContactSmall />
        </div>
      </ModalFormAdvisory>
    </div>
  );
};

export default CardServiceAdvisory;
