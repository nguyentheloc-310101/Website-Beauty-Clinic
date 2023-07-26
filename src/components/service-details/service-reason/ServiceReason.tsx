import { gradientText } from '@/constants/gradentText';
import React from 'react';

const ServiceReason = () => {
  return (
    <div className="lg:p-[36px] mt-[25px] flex flex-cols gap-[40px] bg-white/100 shadow-lg rounded-[40px] border">
      <div>
        <div
          className={`lg:w-[160px] lg:h-[160px] rounded-[50%]  bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] flex items-center justify-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none">
            <path
              d="M80 31.6667C80.0073 29.5771 79.4533 27.5239 78.3958 25.7217C77.3384 23.9194 75.8163 22.4343 73.9886 21.4214C72.1609 20.4085 70.0948 19.9051 68.006 19.9637C65.9173 20.0223 63.8826 20.6409 62.1146 21.7547C60.3467 22.8685 58.9103 24.4367 57.9556 26.2955C57.0009 28.1542 56.5629 30.2352 56.6875 32.3211C56.812 34.407 57.4945 36.4211 58.6635 38.153C59.8326 39.885 61.4454 41.2711 63.3333 42.1667V53.3333C63.3333 57.7536 61.5774 61.9928 58.4518 65.1184C55.3262 68.244 51.0869 70 46.6667 70C42.2464 70 38.0072 68.244 34.8816 65.1184C31.7559 61.9928 30 57.7536 30 53.3333V52.83C35.6425 51.6699 40.7126 48.6001 44.3557 44.1378C47.9989 39.6756 49.9923 34.0939 50 28.3333V11.6667C50 8.57247 48.7708 5.60501 46.5829 3.41709C44.395 1.22916 41.4275 0 38.3333 0H30V10H38.3333C38.7754 10 39.1993 10.1756 39.5118 10.4882C39.8244 10.8007 40 11.2246 40 11.6667V28.3333C40 32.3116 38.4196 36.1269 35.6066 38.9399C32.7936 41.753 28.9782 43.3333 25 43.3333C21.0218 43.3333 17.2064 41.753 14.3934 38.9399C11.5804 36.1269 10 32.3116 10 28.3333V11.6667C10 11.2246 10.1756 10.8007 10.4882 10.4882C10.8007 10.1756 11.2246 10 11.6667 10H20V0H11.6667C8.57247 0 5.60501 1.22916 3.41709 3.41709C1.22916 5.60501 0 8.57247 0 11.6667L0 28.3333C0.00772679 34.0939 2.00114 39.6756 5.64427 44.1378C9.2874 48.6001 14.3575 51.6699 20 52.83V53.3333C20 60.4058 22.8095 67.1885 27.8105 72.1895C32.8115 77.1905 39.5942 80 46.6667 80C53.7391 80 60.5219 77.1905 65.5229 72.1895C70.5238 67.1885 73.3333 60.4058 73.3333 53.3333V42.1667C75.324 41.2264 77.0071 39.7407 78.1872 37.8821C79.3672 36.0235 79.9958 33.8682 80 31.6667Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div>
        <div
          className={`lg:text-[24px] font-[800] leading-[36px] ${gradientText}`}>
          Lý do bị nám?
        </div>
        <div className="lg:text-[16px] font-[400px] text-[#36383A] lg:leading-[24px] lg:tracking-[0.5px] lg:mt-[18px]">
          Có rất nhiều nguyên nhân dẫn đến hình thành những mảng màu nâu trên
          da. Ánh nắng mặt trời là một số nguyên nhân chính, khi tiếp xúc trực
          tiếp với da sẽ dẫn đến sản sinh melanin một lượng bất thường. Ngoài
          ra, tia UV trong ánh nắng còn phá hủy tế bào, làm vỡ cấu trúc dưới da
          làm cho da khô, lão hóa. Di truyền: Theo nghiên cứu thì có đến khoảng
          30% người bị nám do di truyền từ ba mẹ. Tiếp đến là các nguyên do từ
          rối loạn nội tiết tố: Điều này làm cho lượng sắc tố melanin tăng
          nhanh, hình thành nên các vết nám. Ở các giai đoạn dậy thì, tiền mãn
          kinh hay sử dụng thuốc tránh thai cũng có thể là nguyên nhân gây ra
          nám. Sử dụng mỹ phẩm không phù hợp với da, không rõ nguồn gốc, kém
          chất lượng. Chế độ sinh hoạt hằng ngày không được khoa học.
        </div>
      </div>
    </div>
  );
};

export default ServiceReason;
