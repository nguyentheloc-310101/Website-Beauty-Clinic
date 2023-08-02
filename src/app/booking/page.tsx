'use client';
import CalendarBooking from '@/components/booking/calendar-booking/CalendarBooking';
import SummaryBookingForm from '@/components/booking/summary-form/SummaryBookingForm';
import TimeTableBooking from '@/components/booking/timetable-booking/TimeTableBooking';
import PopUpConfirm from '@/components/common/modal/modal-popconfirm/ModalPopconfirm';
import { Clinic } from '@/interfaces/clinic/clinic';
import { supabase } from '@/services/supabase';
import { useEffect, useRef, useState } from 'react';
import lottie_booking from '../../../public/lottie/animation_lks6x6yc.json';
import { message } from 'antd';
import { Service } from '@/interfaces/service/service';
import { User } from '@/interfaces/users/user';
import useSWR from 'swr';

const desc_popConfirm_sending =
  'Khi bấm “Xác nhận”, đặt hẹn của bạn sẽ được lên lịch. Sẽ có tư vấn viên liên hệ với bạn thời gian sớm nhất. ';
const BookingPage = () => {
  const [dateBooking, setDateBooking] = useState<string>('dd-mm-yy');
  const [timeBooking, setTimeBooking] = useState<string>('00:00');
  const [confirmSending, setConfirmSending] = useState<boolean>(false);

  // const [allClinics, setAllClinics] = useState<Clinic[]>([]);
  // const [allServices, setAllServices] = useState<Service[]>([]);
  // const [allUsers, setAllUsers] = useState<User[]>([]);
  const [service, setService] = useState<string[]>([]);
  const [clinic, setClinic] = useState<string>('');
  // const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>();
  const customerName = useRef<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   getAllClinics();
  //   getAllServices();
  //   //getAllUsers();
  // }, []);

  const onOkeTest = () => {
    console.log('service: ', service);
    console.log('clinic: ', clinic);
    console.log('customerName: ', customerName.current);
    console.log('customerEmail: ', customerEmail);
    console.log('customerPhone: ', customerPhone);
    console.log('dateBooking: ', dateBooking);
    console.log('timeBooking: ', timeBooking);
  };

  const onOk = async () => {
    //create user
    const validPhone: any = allUsers?.filter(
      (user: User) => user.phone == customerPhone
    );
    if (validPhone.length > 0) {
      message.error('Số điện thoại đã tồn tại');
      setConfirmSending(false);
      return;
    }
    let newCustomer = {
      name: customerName,
      email: customerEmail ? customerEmail : '',
      phone: customerPhone,
    };

    setLoading(true);
    const { error: errorCreateUser } = await supabase
      .from('user')
      .insert(newCustomer);
    if (errorCreateUser) {
      message.warning(errorCreateUser.message);
      return;
    }
  };

  // const getAllClinics = async () => {
  //   const { data }: any = await supabase
  //     .from('clinics')
  //     .select('*')
  //     .eq('active', true);
  //   setAllClinics(data);
  // };

  const fetchUsers = async () => {
    const { data }: any = await supabase.from('users').select('*');
    if (data) {
      return data;
    }
    return [];
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
    data: allUsers,
    error,
    isLoading: userIsLoading,
  } = useSWR<User[]>('/users/get', fetchUsers);

  const {
    data: allClinics,
    error: clinicError,
    isLoading: clinicIsLoading,
  } = useSWR<Clinic[]>('/clinics/get', fetchClinics);

  const {
    data: allServices,
    error: serviceError,
    isLoading: serviceIsLoading,
  } = useSWR<Service[]>('/services/get', fetchServices);

  useEffect(() => {
    if (userIsLoading || clinicIsLoading || serviceIsLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userIsLoading, clinicIsLoading, serviceIsLoading]);

  useEffect(() => {
    if (clinicError || serviceError) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [clinicError, serviceError]);

  const onCancel = () => {
    setConfirmSending(false);
  };
  // const getAllServices = async () => {
  //   let { data, error } = await supabase
  //     .from('services')
  //     .select(`*,category_id(*)`)
  //     .order('created_at', { ascending: false });
  //   if (error) {
  //     message.error(error.message);
  //     return;
  //   }
  //   setAllServices(data as Service[]);
  // };

  return (
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
            allClinics={allClinics as Clinic[]}
            allServices={allServices as Service[]}
            // setCustomerName={setCustomerName}
            customerName={customerName}
            setCustomerEmail={setCustomerEmail}
            setCustomerPhone={setCustomerPhone}
          />
        </div>
      </div>
      {confirmSending && (
        <PopUpConfirm
          loading={false}
          title={'Gửi đặt hẹn'}
          description={desc_popConfirm_sending}
          color={'#BC2449'}
          lottie={lottie_booking}
          onCancel={() => setConfirmSending(false)}
          onOk={onOkeTest}
        />
      )}
    </div>
  );
};

export default BookingPage;
