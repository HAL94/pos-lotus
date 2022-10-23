import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'renderer/styles/swiper.css';

interface Props {
  categories: {
    __typename?: 'Category' | undefined;
    id: number;
    title: string;
    created: string;
    updated: string;
    image: string;
  }[];
  selectedCat: any | null;
  onCatChanged: (cat: any) => void;
}

const breakPoints = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  958: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 4,
  },
  1300: {
    slidesPerView: 6,
    navigation: false,
  },
};
const navigation = false;

const CategoriesSlider: React.FC<Props> = ({
  categories,
  selectedCat,
  onCatChanged,
}) => {
  const activeClass =
    'bg-primary-opacified border-secondary font-bold text-white';
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        breakpoints={breakPoints}
        spaceBetween={0}
        navigation={navigation}
      >
        <SwiperSlide>
          <div
            onClick={() => onCatChanged(null)}
            className={`flex flex-col justify-center cursor-pointer items-center bg-white w-[120px] border-[#a376763b] border rounded-xl py-6 px-4 mx-auto ${
              selectedCat === null ? activeClass : ''
            }}`}
          >
            <img
              src={'https://cdn-icons-png.flaticon.com/512/3073/3073798.png'}
              width={40}
            />
            <h1 className="text-sm mt-3">All</h1>
          </div>
        </SwiperSlide>
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div
              onClick={() => onCatChanged(cat)}
              className={`flex flex-col justify-center cursor-pointer items-center bg-white w-[120px] border-[#a376763b] border rounded-xl py-6 px-4 mx-auto ${
                selectedCat?.id === cat.id ? activeClass : ''
              }`}
            >
              <img src={cat.image} width={40} height={40} />
              <h1 className="text-sm mt-3">{cat.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoriesSlider;
