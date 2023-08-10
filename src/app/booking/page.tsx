'use client';
import CalendarBooking from '@/components/booking/calendar-booking/CalendarBooking';
import SummaryBookingForm from '@/components/booking/summary-form/SummaryBookingForm';
import TimeTableBooking from '@/components/booking/timetable-booking/TimeTableBooking';
import PopUpConfirm from '@/components/common/modal/modal-popconfirm/ModalPopconfirm';
import { supabase } from '@/services/supabase';
import { CreateId } from '@/utils/helpers/create-order-uid';
import { message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import lottie_booking from '../../../public/lottie/animation_lks6x6yc.json';

import LoadingDefault from '@/components/common/loading/LoadingDefault';
import { IClinic } from '@/interfaces/clinic/clinic';
import { IService } from '@/interfaces/service/service';
import { User } from '@/interfaces/users/user';
import useUsersStore from '@/stores/users-store';
import { useRouter } from 'next/navigation';

const desc_popConfirm_sending =
  'Khi bấm “Xác nhận”, đặt hẹn của bạn sẽ được lên lịch. Sẽ có tư vấn viên liên hệ với bạn thời gian sớm nhất. ';
const BookingPage = () => {
  const router = useRouter();
  const [dateBooking, setDateBooking] = useState<string>('dd-mm-yy');
  const [timeBooking, setTimeBooking] = useState<string>('00:00');
  const [confirmSending, setConfirmSending] = useState<boolean>(false);

  const [service, setService] = useState<string[]>([]);
  const [clinic, setClinic] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const customerName = useRef<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const usersStore = useUsersStore((state) => state);

  const onOk = async () => {
    //create user

    const { data: validPhone } = await supabase
      .from('users')
      .select()
      .match({ phone: customerPhone });
    if (validPhone && validPhone.length > 0) {
      message.error('Số điện thoại đã tồn tại');
      setConfirmSending(false);
      return;
    }
    let newCustomer = {
      name: customerName.current,
      email: customerEmail,
      phone: customerPhone,
    };
    let userId = '';
    const orderId = CreateId();

    setLoading(true);
    const { data: dataUser, error: errorCreateUser } = await supabase
      .from('users')
      .insert(newCustomer)
      .select('*');
    if (errorCreateUser) {
      console.log('I am at create User');
      message.warning(errorCreateUser.message);
      return;
    }
    userId = dataUser[0].id;

    // create all other
    let new_order = {
      id: orderId,
      user_id: userId,
      clinic_id: clinic,
    };
    const { data: dataOrder, error: errorOrder } = await supabase
      .from('orders')
      .insert(new_order);
    if (errorOrder) {
      console.log('I am at create Order');
      message.warning(errorOrder.message);
      return;
    }
    // message.success('Order Create Success');

    //create booking
    {
      service &&
        service.map(async (item) => {
          let new_booking = {
            id: CreateId(),
            order_id: orderId,
            clinic_id: clinic,
            service_id: item,
            date: dateBooking,
            time: timeBooking,
          };
          const { data: dataBooking, error: errorBooking } = await supabase
            .from('bookings')
            .insert(new_booking);
          if (errorBooking) {
            console.log('I am at create Booking');
            message.warning(errorBooking.message);
            return;
          }
        });
    }
    setConfirmSending(false);
    message.success('Đặt lịch hẹn thành công');
    setLoading(false);
    router.push('/service-details');
  };

  const fetchClinics = async () => {
    const { data }: any = await supabase
      .from('clinics')
      .select('*')
      .eq('active', true);
    if (data) {
      return data;
    }
    return [];
  };

  const fetchServices = async () => {
    const { data } = await supabase
      .from('services')
      .select(`*,category_id(*)`)
      .order('created_at', { ascending: false });
    if (data) {
      return data;
    }
    return [];
  };

  const {
    data: allClinics,
    error: clinicError,
    isLoading: clinicIsLoading,
  } = useSWR<IClinic[]>('/clinics/get', fetchClinics);

  const {
    data: allServices,
    error: serviceError,
    isLoading: serviceIsLoading,
  } = useSWR<IService[]>('/services/get', fetchServices);

  useEffect(() => {
    if (usersStore.users) {
      console.log('updated here');
      setAllUsers(usersStore.users);
    }
  }, [usersStore.users]);

  return (
    <div className="relative">
      <div className="mt-[12px] lg:mt-[2px] flex flex-col px-[16px] lg:grid lg:grid-cols-2 lg:px-[130px] lg:py-[30px] lg:gap-[24px]">
        <div className="flex flex-col lg:flex-col lg:gap-[24px] lg:h-full">
          <div>
            <CalendarBooking setDateBooking={setDateBooking} />
          </div>
          <div>
            <TimeTableBooking setTimeBooking={setTimeBooking} />
          </div>
        </div>
        <div className="p-[24px] lg:flex lg:w-full rounded-[20px] bg-[#fff] lg:p-[24px]">
          <div className="w-full">
            <SummaryBookingForm
              setConfirmSending={setConfirmSending}
              setService={setService}
              setClinic={setClinic}
              timeBooking={timeBooking}
              dateBooking={dateBooking}
              allClinics={allClinics as IClinic[]}
              allServices={allServices as IService[]}
              customerName={customerName}
              setCustomerEmail={setCustomerEmail}
              setCustomerPhone={setCustomerPhone}
            />
          </div>
        </div>
        {confirmSending && (
          <PopUpConfirm
            loading={loading}
            title={'Gửi đặt hẹn'}
            description={desc_popConfirm_sending}
            color={'#BC2449'}
            lottie={lottie_booking}
            onCancel={() => setConfirmSending(false)}
            onOk={onOk}
          />
        )}
      </div>
      {loading && <LoadingDefault loading={loading} />}
    </div>
  );
};

export default BookingPage;
