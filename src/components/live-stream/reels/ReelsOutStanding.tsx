'use client';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import ReelCard from './ReelCard';

const ReelsOutStanding = () => {
  return (
    <div className="w-full h-auto px-[2rem] sm:px-[5rem] pt-5 flex-wrap mb-[10%]">
      <div className="flex justify-between items-center">
        <p className="font-[700] !my-0 text-[1.2rem] sm:py-5 sm:text-[2rem] text-[#bc2449]">
          Reels nổi bật
        </p>
        <Link
          href="/live-commerce"
          className="flex items-center gap-5">
          <span className="font-[700] text-[1.2rem] sm:py-5 sm:text-[2rem] text-[#bc2449]">
            Xem thêm
          </span>
          <BsChevronRight className="text-[1.2rem] sm:text-[2rem] text-[#bc2449]" />{' '}
        </Link>
      </div>
      <div className="flex justify-between flex-wrap pt-[1rem]">
        <ReelCard
          title="Cắt mí Minideep"
          author="Rey"
          date="3/3/2022"
        />
        <ReelCard
          title="HIFU ULTHERAPY 4.0"
          author="Trọng"
          date="08/08/2022"
        />
        <ReelCard
          title="Căng bóng da Glasskin Face"
          author="Hường"
          date="09/05/2022"
        />
        <ReelCard
          title="AURA Cây lăn đá cẩm thạch"
          author="Bebe"
          date="6/6/2022"
        />
      </div>
    </div>
  );
};

export default ReelsOutStanding;
