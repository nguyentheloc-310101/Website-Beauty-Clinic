import { gradientText } from '@/constants/gradentText';
import React from 'react';

const ServiceDefinition = () => {
  return (
    <div className="lg:p-[36px] flex flex-cols gap-[40px] bg-white/100 shadow-lg mt-[20px] rounded-[40px] border">
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
              d="M68.3333 16.6767H60V11.67C60 5.23667 54.7667 0 48.3267 0L11.6633 0.0166667C5.23 0.0233333 0 5.26 0 11.6933L0.0166667 57.0967C0.0166667 60.5367 2.81 63.3367 6.24333 63.3367C6.85667 63.3367 7.46333 63.2467 8.05 63.0667L20 58.0767V73.3433H56.6667L71.4767 79.5533L72.0733 79.76C72.6333 79.9167 73.2 79.9933 73.7567 79.9933C77.1867 79.9933 79.98 77.1933 79.98 73.7567L80 28.3367C80 21.9033 74.7667 16.6767 68.3333 16.6767ZM10 11.6867C10 10.7833 10.7633 10.0167 11.6667 10.0167L48.33 10.0033C49.25 10.0033 50 10.7533 50 11.67V46.6833H21.32L10.0133 51.4267L10 11.6867ZM69.9833 68.0867L58.6767 63.3433H29.9967V56.6833H59.9967V26.6767H68.33C69.2467 26.6767 69.9967 27.4233 69.9967 28.3367L69.98 68.0867H69.9833ZM26.6667 23.3333H20C20 20.37 21.3033 17.5767 23.5733 15.67C25.8433 13.7633 28.83 12.9567 31.7833 13.4933C35.8133 14.1967 39.13 17.51 39.84 21.55C40.5833 25.79 38.5667 30.0267 34.82 32.0967C33.33 32.9167 33.33 33.1567 33.33 33.3333H26.6633C26.6633 28.9733 30.1233 27.07 31.6 26.2567C32.5667 25.7267 33.5833 24.4733 33.2733 22.7033C33.0433 21.3967 31.9333 20.2867 30.63 20.06C29.61 19.8733 28.6233 20.1333 27.8567 20.78C27.0967 21.4133 26.6633 22.3467 26.6633 23.3367L26.6667 23.3333ZM26.6667 36.6667H33.3333V43.3333H26.6667V36.6667Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div>
        <div
          className={`lg:text-[24px] font-[800] leading-[36px] ${gradientText}`}>
          Nám là gì?
        </div>
        <div className="lg:text-[16px] font-[400px] text-[#36383A] lg:leading-[24px] lg:tracking-[0.5px] lg:mt-[18px]">
          Nám có rất nhiều định nghĩa nhưng nói một cách đơn giản thì nám là tập
          hợp là các tế bào dị biệt, bị nhiễm sắc tố melanin (hắc tố) gây ra
          những vết đốm, mảng da tối màu trên gương mặt. Melanin luôn luôn tồn
          tại sâu dưới da, tạo thành lớp màng và có chức năng hấp thụ ánh sáng,
          ngăn chặn tia UV gây hại cho da. Tuy nhiên các hắc tố melanin hấp thụ
          quá nhiều ánh sáng hay được kích thích bởi một vài yếu tố đặc biệt sẽ
          phát triển mạnh, thể hiện rõ trên bề mặt da, gây ra nám, ảnh hưởng
          thẩm mỹ. Nám thường xuất hiện rõ ở trán, cằm, má, sống mũi, quanh mắt
          và hai bên gò má. Các hắc tố có tính lây truyền nhanh, chỉ cần một tế
          bào nhiễm melanin thì các tế bào khác cũng có nguy cơ nhiễm cao. Chính
          vì vậy, các đốm, mảng nám thường xuất hiện nhanh và nhiều.
        </div>
      </div>
    </div>
  );
};

export default ServiceDefinition;
