import React from "react";

const icons = {
    wifi: (
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.01129 7.31531C7.31912 4.03839 12.6822 4.03839 15.99 7.31531M7.00596 10.282C8.65988 8.64355 11.3414 8.64355 12.9953 10.282M10.0006 13.2487L10.0182 13.2313M1 4.6931C5.97056 -0.231032 14.0294 -0.231032 19 4.6931" stroke="#165F41" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    ac: (
      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.11523 6.7876H17.3849M3.15466 16.4426C4.60414 15.7028 5.51981 14.1906 5.51981 12.5363V11.6142M14.9803 11.6142V12.5363C14.9803 14.1906 15.896 15.7028 17.3455 16.4426M10.2501 11.6142V16.4426M12.6151 11.6142V16.4426M7.88477 11.6142V16.4426M18.5674 9.19986H1.93257C1.27948 9.19986 0.75 8.6594 0.75 7.99275V1.95718C0.75 1.29053 1.27948 0.750067 1.93257 0.750067H18.5674C19.2205 0.750067 19.75 1.29053 19.75 1.95718V7.99275C19.75 8.6594 19.2205 9.19986 18.5674 9.19986Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    ),
    elevator: (
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.71661 3.7835L5.97697 2.72212L5.2373 3.7835M10.2837 2.72212L11.0233 3.7835L11.763 2.72212M15.9608 16.5725H1.03942C0.879565 16.5725 0.75 16.4402 0.75 16.277V1.04549C0.75 0.882307 0.879565 0.750048 1.03942 0.750048H15.9608C16.1206 0.750048 16.2502 0.882307 16.2502 1.04549V16.277C16.2502 16.4402 16.1206 16.5725 15.9608 16.5725ZM13.5468 16.5745H8.50024V5.7626H13.5468V16.5745ZM8.50019 16.5745H3.45361V5.7626H8.50019V16.5745Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    parking: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 10.9492H10.35C12.0069 10.9492 13.35 9.60603 13.35 7.94921C13.35 6.29238 12.0069 4.94922 10.35 4.94922H6.75M6.75 15.1492V4.94922M18.75 14.0315C18.75 17.0898 17.0898 18.75 14.0316 18.75H5.46839C2.41018 18.75 0.75 17.0898 0.75 14.0315V5.46847C0.75 2.41018 2.41018 0.75 5.46839 0.75H14.0316C17.0898 0.75 18.75 2.41018 18.75 5.46847V14.0315Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    power: (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 10.7256C0.75 16.2121 5.2391 20.7012 10.7256 20.7012C16.2121 20.7012 20.7012 16.2121 20.7012 10.7256C20.7012 5.2391 16.2121 0.75 10.7256 0.75C5.2391 0.75 0.75 5.2391 0.75 10.7256Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7256 9.40101V4.76505L7.08305 12.0501H10.7256V16.6861L14.3681 9.40101H10.7256Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    ),
    housekeeping: (
<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.45584 6.50522V6.50478C7.46333 5.52597 8.07239 4.30652 8.73389 3.39426H11.3781V0.75H5.51672C5.48719 0.75 5.45766 0.75 5.42857 0.750441C2.31893 0.77468 1.02148 2.07213 1.02148 2.07213C1.02148 2.07213 3.37751 4.59651 3.48549 6.39769M8.73399 3.39425V0.75043M1.34099 14.7258L2.0025 14.5385C3.13821 14.2168 4.32019 14.118 5.48454 14.2436C5.97593 14.2961 6.4638 14.3886 6.94417 14.5213C7.74318 14.7416 8.56378 14.8518 9.38394 14.8518C10.3121 14.8518 11.2402 14.7108 12.1344 14.4292M5.48454 6.30294V19.3479M11.0798 21.9922H3.61537C1.87483 21.9922 0.536527 20.4528 0.778609 18.7292L2.31069 7.82061C2.4329 6.95029 3.17752 6.30294 4.05638 6.30294H6.62629C7.62207 6.30294 8.42937 7.11005 8.42937 8.10583C8.42937 8.12941 8.42937 8.15303 8.42937 8.17675C8.42937 9.82244 9.13419 11.3944 10.3781 12.4719C11.6696 13.5906 13.1904 15.4704 13.8953 18.4367C14.3265 20.2515 12.9451 21.9922 11.0798 21.9922ZM5.51681 0.75C5.48728 0.75 5.45776 0.75 5.42867 0.750441V0.75H5.51681ZM14.7071 2.06576C14.7071 2.43085 14.4112 2.72682 14.0461 2.72682C13.681 2.72682 13.385 2.43085 13.385 2.06576C13.385 1.70066 13.681 1.40469 14.0461 1.40469C14.4112 1.40469 14.7071 1.70066 14.7071 2.06576ZM17.3514 2.06576C17.3514 2.43085 17.0554 2.72682 16.6903 2.72682C16.3252 2.72682 16.0293 2.43085 16.0293 2.06576C16.0293 1.70066 16.3252 1.40469 16.6903 1.40469C17.0554 1.40469 17.3514 1.70066 17.3514 2.06576ZM19.9956 2.06576C19.9956 2.43085 19.6997 2.72682 19.3346 2.72682C18.9695 2.72682 18.6735 2.43085 18.6735 2.06576C18.6735 1.70066 18.9695 1.40469 19.3346 1.40469C19.6997 1.40469 19.9956 1.70066 19.9956 2.06576ZM17.3514 4.71001C17.3514 5.07511 17.0554 5.37108 16.6903 5.37108C16.3252 5.37108 16.0293 5.07511 16.0293 4.71001C16.0293 4.34492 16.3252 4.04895 16.6903 4.04895C17.0554 4.04895 17.3514 4.34492 17.3514 4.71001ZM19.9956 4.71001C19.9956 5.07511 19.6997 5.37108 19.3346 5.37108C18.9695 5.37108 18.6735 5.07511 18.6735 4.71001C18.6735 4.34492 18.9695 4.04895 19.3346 4.04895C19.6997 4.04895 19.9956 4.34492 19.9956 4.71001ZM19.9956 7.35427C19.9956 7.71937 19.6997 8.01533 19.3346 8.01533C18.9695 8.01533 18.6735 7.71937 18.6735 7.35427C18.6735 6.98917 18.9695 6.69321 19.3346 6.69321C19.6997 6.69321 19.9956 6.98917 19.9956 7.35427Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    ),
    water: (
       <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.0953 18.6725C4.99591 18.6725 3.28814 16.9647 3.28814 14.8653M7.09526 21.2109C10.5997 21.2109 13.4405 18.3701 13.4405 14.8657C13.4405 13.3664 12.9205 11.9463 12.0511 10.8604L7.09526 4.67096L2.13944 10.8604C1.26997 11.9463 0.75 13.3664 0.75 14.8657C0.75 18.3701 3.59086 21.2109 7.09526 21.2109ZM14.7096 7.84323C13.3098 7.84323 12.1715 6.70494 12.1715 5.30513C12.1715 4.72204 12.3629 4.17428 12.7255 3.7219L14.7096 1.21007L16.6937 3.7219C17.0562 4.17428 17.2477 4.72204 17.2477 5.30513C17.2477 6.70494 16.1094 7.84323 14.7096 7.84323Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

    ),
    toiletries: (
       <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.24063 10.8206H5.04542M13.8124 6.76829H7.53601M5.56881 1.57996H7.71649L8.43843 2.51845M7.53602 18.0852H0.75V5.25696C0.75 4.522 1.34581 3.92623 2.08073 3.92623H6.2053C6.94025 3.92623 7.53602 4.522 7.53602 5.25696V18.0852ZM5.56879 0.749915H2.71723V3.92636H5.56879V0.749915ZM7.53605 13.1667H0.750022V8.47421H7.53605V13.1667ZM13.0948 4.64813H7.53601V18.0852H13.0948L13.2594 17.6709C14.7818 13.8403 14.8573 9.58646 13.4717 5.7043L13.0948 4.64813ZM12.0841 12.9142H7.53603V9.88211H12.0841V12.9142Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

    ),
    cctv: (
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1356 5.43545V8.86532C18.1356 13.3474 14.5022 16.9807 10.0202 16.9807C5.53824 16.9807 1.90488 13.3474 1.90488 8.86532V5.43545M19.2905 5.43547H0.75V0.749991H19.2905V5.43547ZM10.0202 10.0532C10.6571 10.0532 11.1751 10.5713 11.1751 11.2081C11.1751 11.8449 10.6571 12.363 10.0202 12.363C9.3834 12.363 8.86535 11.8449 8.86535 11.2081C8.86535 10.5713 9.3834 10.0532 10.0202 10.0532ZM10.0202 14.6709C8.11084 14.6709 6.5574 13.1175 6.5574 11.2081C6.5574 9.29867 8.11084 7.74527 10.0202 7.74527C11.9297 7.74527 13.4831 9.29867 13.4831 11.2081C13.4831 13.1175 11.9297 14.6709 10.0202 14.6709Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

    ),
    fire: (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33537 8.39228H11.4492M11.4492 8.39228V6.86382C11.4492 5.17553 10.0806 3.80691 8.39228 3.80691C6.70399 3.80691 5.33537 5.17553 5.33537 6.86382V17.2573C5.33537 18.1015 6.0197 18.7858 6.86382 18.7858H9.92074C10.7649 18.7858 11.4492 18.1015 11.4492 17.2573V8.39228ZM8.39228 0.75H6.86382C4.3314 0.75 2.27846 2.80295 2.27846 5.33537V11.4492C2.27846 12.2933 1.59413 12.9776 0.75 12.9776M8.39228 3.80691V0.75M14.5061 0.75H11.4492L13.7419 3.80691" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    lounge: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.3178 17.113V19.0733M17.7214 17.113V19.0733M16.8591 7.75127V7.50122C16.8591 3.77263 13.8979 0.75 10.245 0.75H9.75503C6.10214 0.75 3.14089 3.77263 3.14089 7.50122V7.75127M4.74788 17.553C2.53991 17.553 0.75 15.726 0.75 13.4723V12.3121C0.75 11.4283 1.45194 10.7118 2.3178 10.7118C3.18365 10.7118 3.88559 11.4283 3.88559 12.3121V13.4723C3.88559 13.9584 4.27166 14.3525 4.74788 14.3525H15.2521C15.7283 14.3525 16.1144 13.9584 16.1144 13.4723V12.3437C16.1144 11.4464 16.8338 10.6949 17.7128 10.7121C18.5646 10.7287 19.25 11.4387 19.25 12.3121V13.4723C19.25 15.726 17.4601 17.553 15.2521 17.553H4.74788Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    reception: (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 15.3335H15.3335M3.37808 9.27762C3.65325 8.21281 4.27527 7.2859 5.11589 6.62519M8.04175 14.0976V15.3335M6.80586 0.749991H9.27764M14.0976 11.7494H1.98589C1.30331 11.7494 0.750006 11.1961 0.750006 10.5135C0.750006 6.41818 3.94635 3.09821 8.04175 3.09821C12.1371 3.09821 15.3335 6.41818 15.3335 10.5135C15.3335 11.1961 14.7802 11.7494 14.0976 11.7494Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
    balcony: (
        <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 12.8533V7.83755H21.75V12.8533M11.25 2.96923V1.40138C11.25 1.04169 10.9584 0.750073 10.5987 0.750073H4.06641C3.70677 0.750073 3.41516 1.04169 3.41516 1.40138V7.83751H11.25M19.0786 7.83758V4.65533M13.8578 7.83758V4.65533M11.2469 7.83758V4.65533M8.63648 7.83758V4.65533M6.02561 7.83758V4.65533M3.41516 7.83758V4.65533M4.93306 2.38843H6.84957M21.0379 4.65531H0.75V7.83751H21.75V5.36736C21.75 4.97412 21.4312 4.65531 21.0379 4.65531Z" stroke="#165F41" stroke-opacity="0.8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    ),
};

const amenities = [
    {
        category: "Basic Facilities",
        items: [
            { icon: "wifi", text: "High speed Wi-Fi offers steady internet access" },
            { icon: "ac", text: "Air Conditioning keeps rooms comfortable" },
            { icon: "elevator", text: "Elevator access allows easy movement" },
            { icon: "parking", text: "Guarded & ample parking provides safe vehicle space" },
            { icon: "power", text: "Power Backup ensures uninterrupted supply" },
            { icon: "housekeeping", text: "Daily Housekeeping keeps rooms clean" },
        ],
    },
    {
        category: "Room Amenities",
        items: [
            { icon: "water", text: "Mineral Water provides clean hydration" },
            { icon: "toiletries", text: "Essential Toiletries support daily needs" },
        ],
    },
    {
        category: "Safety and Security",
        items: [
            { icon: "cctv", text: "CCTV Surveillance monitors the property" },
            { icon: "fire", text: "Fire Extinguishers support emergency safety" },
        ],
    },
    {
        category: "Common Areas",
        items: [
            { icon: "lounge", text: "The Lounge welcomes you with relaxed seating" },
            { icon: "reception", text: "The Reception welcomes and assists guests" },
            { icon: "balcony", text: "The Rooftop Balcony offers open air" },
        ],
    },
];

const CommonAmenities = () => {
    return (
        <section className="bg-[#F9F5EC] py-20 md:px-16 px-4 ">
            <div className="container mx-auto ">

                <div className="w-full h-px bg-[#165F41] mb-12  "></div>
            </div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Title */}
                    <div className="lg:w-1/4">
                        <p className="block text-[#4A6741]  uppercase text-sm font-semibold">
                            COMMON AMENITIES
                        </p>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#0F2A1D] text-lg  leading-relaxed font-medium  mb-12">
                            At The Padival Grand, each amenity is thoughtfully maintained to make your stay comfortable, calm and dependable.<br /> Every facility is designed to support a smooth experience, whether you are here for a short visit or a longer stay.
                        </p>

                        <div className="space-y-12">
                            {amenities.map((category, index) => (
                                <div key={index}>
                                    <p className="text-xl font-bold text-[#012219CC] mb-6">
                                        {category.category}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="text-[#4A6741] flex items-center">
                                                    {icons[item.icon as keyof typeof icons]}
                                                </div>
                                                <span className="text-[#0F2A1D] text-md font-medium flex items-center leading-relaxed">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommonAmenities;
