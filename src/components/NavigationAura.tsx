interface Props {
  isMobile: boolean;
}
const NavigationAura = ({ isMobile }: Props) => {
  return isMobile ? (
    <></>
  ) : (
    <div className="w-full text-white bg-[#bc2449] text-[14px] flex items-center justify-between font-[600] xl:px-[10rem] lg:px-[7rem] md:px-[6rem] py-[10px] hover:text-[]">
      <span className="text-center hover:">Phẩu thuật thẩm mỹ</span>
      <span className="text-center">Điều trị nám</span>
      <span className="text-center">Phun xăm</span>
      <span className="text-center">Tạo hình không xâm lấn</span>
      <span className="text-center">Nâng cơ trẻ hóa</span>
      <span className="text-center">Dịch vụ khác</span>
    </div>
  );
};

export default NavigationAura;
