import { convertVnd } from '@/utils/helpers/convert-money';
import { EditOutlined } from '@ant-design/icons';

interface TitleInfoProps {
  title: string;
  totalPrice?: number;
  openEdit?: any;
  hideEdit: boolean;
}
function ItemInform({ title, totalPrice, openEdit, hideEdit }: TitleInfoProps) {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-[18px] font-[600]">{title}</h4>
      <div className="flex items-center gap-2">
        {totalPrice !== undefined && (
          <div className="text-[#5A68ED] text-[16px] font-bold">
            {convertVnd(totalPrice)}
          </div>
        )}
        {!hideEdit && (
          <EditOutlined
            rev={undefined}
            width={18}
            height={20}
            className="text-[#8F9499] cursor-pointer"
            onClick={openEdit}
          />
        )}
      </div>
    </div>
  );
}

interface ItemInfoProps {
  label?: string | number;
  value?: any;
  color?: string;
  background?: string;
}
function ItemInfo({ label, value, color, background }: ItemInfoProps) {
  return (
    <div className="flex justify-between items-center lg:text-[16px] text-[#36383A] font-[300] py-2 ">
      <p>{label}</p>
      <p
        className={`${
          color || 'text-[#36383A]'
        } rounded-md py-1 font-[600] ${background} text-end`}>
        {typeof value == 'number' ? convertVnd(value) : value}
      </p>
    </div>
  );
}

export { ItemInform, ItemInfo };
