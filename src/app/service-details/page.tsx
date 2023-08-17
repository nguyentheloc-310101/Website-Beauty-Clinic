/* eslint-disable @next/next/no-img-element */
'use client';
import CoverImage from '@/components/service-details/CoverImage';
import RecommendTag from '@/components/service-details/RecommendTag';
import ListCategory from '@/components/service-details/list-category/ListCategory';
import ServiceSideBarVs1 from '@/components/service-details/service-sideBar/vs1/ServiceSideBarVs1';
import ZaloQR from '@/components/service-details/zalo-qr/ZaloQR';
import ZaloQRMobile from '@/components/service-details/zalo-qr/ZaloQRMobile';
import { ICategory, ITag } from '@/interfaces/category/Category';
import { IService, IServiceStep } from '@/interfaces/service/service';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { useEffect, useState } from 'react';

const initObj = {
  background: '',
  title: '',
  subtitle: '',
};
const ServicePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [coverObject, setCoverObject] = useState<any>(initObj);
  const [allCategory, setAllCategory] = useState<ICategory[]>([]);
  const [categoriesOnPage, setCategoriesOnPage] = useState<any>([]);

  const [categoriesFilter, setCategoriesFilter] = useState<any>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [tagSelected, setTagSelected] = useState<string>('');

  useEffect(() => {
    fetchDataServiceDetail();
  }, []);
  useEffect(() => {
    filterCategoriesByTags(tagSelected);
  }, [tagSelected]);

  const fetchDataServiceDetail = async () => {
    setLoading(true);
    let allCategories: any = [];
    const { data: tag, error: tagsErr } = await supabase_website
      .from('tags')
      .select('*');
    if (tagsErr) {
      message.error(tagsErr.message);
      return;
    }
    if (tag) {
      setTags(tag);
    }
    const { data, error } = await supabase_website
      .from('data')
      .select('*')
      .eq('key', 'servicePage');
    if (error) {
      message.error(error.message);
      setLoading(false);
      return;
    }
    console.log('service: ', data[0].data);

    if (data) {
      const allCategoryId = data[0].data.category_ids;

      const bgObj = {
        background: data[0].data.background,
        title: data[0].data.title,
        subtilte: data[0].data.subtilte,
        description: data[0].data.description,
      };
      setCoverObject(bgObj);
      const { data: categories, error: cateErr } = await supabase_website
        .from('service-categories')
        .select('*,tags(*),services(service-details(*),*)');
      if (cateErr) {
        message.error(cateErr.message);
        return;
      }
      if (categories) {
        allCategories = formatCategoriesData(categories);
        console.log('categories: ', allCategories);
      }
      allCategoryId &&
        allCategoryId.map((id: string) => {
          const tmp = allCategories.filter(
            (category: any) => category.id == id
          );
          if (tmp.length !== 0) {
            setCategoriesOnPage((prev: any) => [...prev, tmp[0]]);
          }
        });
    }
    setLoading(false);
  };
  console.log('categoriesOnPage: ', categoriesOnPage);

  const filterCategoriesByTags = (tag: string) => {
    if (tag == '') {
      setCategoriesFilter(allCategory);
      return;
    }
    const res = allCategory.filter((items: any) =>
      items.tags.filter((value: any) => value.id == tag)
    );
    setCategoriesFilter(res);
    console.log('res: ', tag);
  };

  const formatCategoriesData = (data: any) => {
    const res: ICategory[] = data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        services: item.services,
        tags: item.tags,
      };
    });

    setAllCategory(res);
    console.log(res);
    return res;
  };

  return (
    <div>
      <CoverImage
        image={coverObject.background}
        textAbove={coverObject.title}
        textBeneath={coverObject.subtilte}
        description={coverObject.description}
      />

      <div className="relative">
        <img
          src="https://ucarecdn.com/a790035a-a601-47ca-8742-95a2ea964a47/-/preview/469x216/-/quality/smart/-/format/auto/-/filter/carris/"
          alt=""
          className="absolute z-[-999] top-0"
        />
        <div className="lg:px-[130px] lg:py-[80px]">
          <RecommendTag
            listTag={tags}
            setTagSelected={setTagSelected}
          />
          <ListCategory categoriesOnPage={allCategory} />
        </div>
        <img
          src="https://ucarecdn.com/d9f5af41-2072-4677-b89c-22b38047f1d5/-/preview/-/quality/smart/-/format/auto/-/filter/carris/"
          alt=""
          className="absolute z-[-999] lg:w-[548px] lg:h-[627px] bottom-0 right-1"
        />
      </div>

      <div className="hidden lg:block mt-[80px] relative h-[500px]">
        <div className="absolute bottom-[-37%]">
          <ZaloQR />
        </div>
      </div>
      <div className="lg:hidden">
        <ZaloQRMobile />
      </div>
    </div>
  );
};

export default ServicePage;
