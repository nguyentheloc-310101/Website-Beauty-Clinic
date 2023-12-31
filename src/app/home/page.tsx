"use client";
import { createContext, useContext, useEffect, useState } from "react";
import ActorSaid from "@/components/home/actor-said/ActorSaid";
import AuraCampus from "@/components/home/aura-campus/AuraCampus";
import CustomerSaidVideo from "@/components/home/customer-said-video/CustomerSaidVideo";
import SliderCustomerSaid from "@/components/home/customer-said/SliderCustomerSaid";
import ContactInformation from "@/components/home/form-contact/ContactInformation";
import HeroSection from "@/components/home/hero";
import SeeMoreAboutAura from "@/components/home/see-more/SeeMoreAboutAura";
import SliderService from "@/components/home/service-aura/ServiceAura";
import SliderServiceResponsive from "@/components/home/service-aura/ServiceAuraResponsive";
import PanelContact from "@/components/panel-contact/PanelContact";

import { supabase_website } from "@/services/supabase";
import { FloatButton, message } from "antd";
import { IClinic } from "@/interfaces/clinic/clinic";
import LoadingDefault from "@/components/common/loading/LoadingDefault";
import { IAuraInfos } from "@/interfaces/home/IHome";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import LiveCommerce from "@/components/live-stream/live-commerce";

const GeneralHomeContext = createContext<any>(null);
const HomePage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [generalData, setGeneralData] = useState<any>();

    const [allClinic, setAllClinics] = useState<IClinic[]>([]);
    const [allClinicId, setAllClinicId] = useState<string[]>([]);
    const [clinicsOnHome, setClinicsOnHome] = useState<IClinic[]>([]);

    const [videoLink, setVideoLink] = useState<string>("");

    const [isShowAuraInfos, setIsShowAuraInfos] = useState<boolean>(true);
    const [auraInfos, setAuraInfos] = useState<IAuraInfos[]>([]);

    useEffect(() => {
        fetchDataHome();
    }, []);

    const fetchDataHome = async () => {
        setLoading(true);
        const { data, error } = await supabase_website
            .from("data")
            .select("*")
            .eq("key", "home");
        if (error) {
            message.error(error.message);
            setLoading(false);
            return;
        }
        setGeneralData(data[0]);
        setAllClinicId(data[0].data.clinic_ids);
        setIsShowAuraInfos(data[0].data.hasAuraInfos);
        setAuraInfos(data[0].data.auraInfos);
        setVideoLink(data[0].data.videoLink);
        const allId = data[0].data.clinic_ids;

        const { data: allClinics, error: errorClinics } = await supabase_website
            .from("clinics")
            .select("*");
        if (errorClinics) {
            message.error(errorClinics.message);
            return;
        } else {
            setAllClinics(allClinics);
            setLoading(false);
        }

        allId &&
            allId.map((id: string) => {
                const tmp = allClinics.filter((clinic) => clinic.id == id);
                if (tmp.length !== 0) {
                    setClinicsOnHome((prev) => [...prev, tmp[0]]);
                }
            });
        setLoading(false);
    };

    return (
        <>
            {loading && <LoadingDefault loading={loading} />}
            <GeneralHomeContext.Provider
                value={{ generalData, setGeneralData }}
            >
                <div>
                    {/* <PanelContact /> */}
                    <FloatButton.Group
                        trigger="click"
                        type="primary"
                        style={{ right: 24 }}
                        icon={
                            <CustomerServiceOutlined className="text-[#BC2449]" />
                        }
                    >
                        <FloatButton />
                        <FloatButton
                            icon={
                                <CommentOutlined className="text-[#BC2449]" />
                            }
                        />
                    </FloatButton.Group>
                    <div className="flex flex-col items-center justify-center ">
                        <HeroSection />
                    </div>
                    <div className="hidden lg:block lg:w-full lg:mb-[20px] mb-[30px]">
                        <SliderService />
                    </div>
                    <div className="md:hidden">
                        <SliderServiceResponsive />
                    </div>
                    <CustomerSaidVideo videoLink={videoLink} />
                    <AuraCampus
                        where={"home"}
                        allClinics={clinicsOnHome}
                        allClinicId={allClinicId}
                    />
                    <ActorSaid />
                    <SliderCustomerSaid />
                    {isShowAuraInfos ? (
                        <SeeMoreAboutAura auraInfos={auraInfos} />
                    ) : (
                        <div className="hidden lg:block lg:my-[00px]"></div>
                    )}
                    <LiveCommerce hideNavigate={true} />
                    <ContactInformation />
                </div>
            </GeneralHomeContext.Provider>
        </>
    );
};

export default HomePage;

export function useGeneralHomeContext() {
    const context = useContext(GeneralHomeContext);
    if (!context) {
        throw new Error(
            "useGeneralDataContext must be used within a GeneralDataContext"
        );
    }
    return context;
}
