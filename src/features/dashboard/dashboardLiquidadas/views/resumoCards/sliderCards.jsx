import React from 'react';
import Slider from 'react-slick';
import './sliderCards.scss';
import ResumoCards from './resumoCards';
import { useDashboardState } from '../../context/dashboard';

const SliderCards = () => {
  const { dashboardData } = useDashboardState();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2060,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <ResumoCards
            title="Valor total"
            subtitle="de duplicatas"
            valor={dashboardData?.totalDuplicatas.valor}
            numDuplicatas={dashboardData?.totalDuplicatas.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Duplicatas pagas"
            subtitle="após o vencimento"
            valor={dashboardData?.aposVencimento.valor}
            numDuplicatas={dashboardData?.aposVencimento.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Duplicatas de"
            subtitle="veículos em estoque"
            valor={dashboardData?.emEstoque.valor}
            numDuplicatas={dashboardData?.emEstoque.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Duplicatas de"
            subtitle="veículos vendidos"
            valor={dashboardData?.vendidos.valor}
            numDuplicatas={dashboardData?.vendidos.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Valor total"
            subtitle="de juros"
            valor={dashboardData?.juros.valor}
            numDuplicatas={dashboardData?.juros.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Valor total"
            subtitle="de multa"
            valor={dashboardData?.multa.valor}
            numDuplicatas={dashboardData?.multa.totalItems}
          />
        </div>
        <div>
          <ResumoCards
            title="Valor total"
            subtitle="de mora"
            valor={dashboardData?.mora.valor}
            numDuplicatas={dashboardData?.mora.totalItems}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCards;
