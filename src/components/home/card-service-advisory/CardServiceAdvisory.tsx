import ModalNew from '@/components/common/modal/ModalGeneral';
import FormContactSmall from '../form-contact/FormContactAdvisory';

interface CardServiceAdvisory {
  isAdviseCard: boolean;
  setIsAdviceCard: (e: boolean) => void;
}
const CardServiceAdvisory = ({
  isAdviseCard,
  setIsAdviceCard,
}: CardServiceAdvisory) => {
  return (
    <div className="w-[400px] h-fit rounded-lg">
      <ModalNew
        onCancel={() => {
          setIsAdviceCard(false);
        }}
        width={'450px'}>
        <div className="mt-[20px]">
          <FormContactSmall />
        </div>
      </ModalNew>
    </div>
  );
};

export default CardServiceAdvisory;
