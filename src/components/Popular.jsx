import React from "react";
import { PopularLinha } from "./IndexLinha";
import { useFilmes } from "../hooks/UseFilme";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";


export function Popular() {
    const {
        data: filmes = [],
        isLoading,
        error
    } = useFilmes();

    {isLoading && <p>Carregando...</p>}
    {error && <p>Erro ao carregar filmes.</p>}

    return (
        <section className="popular container" id="popular">

            <div className="heading">
                <h2 className="heading-title">Populares</h2>

                <div className="swiper-btn">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 5500 }}
                loop={true}
                breakpoints={{
                    280: { slidesPerView: 1, spaceBetween: 10 },
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    540: { slidesPerView: 2, spaceBetween: 10 },
                    758: { slidesPerView: 3, spaceBetween: 15 },
                    900: { slidesPerView: 4, spaceBetween: 20 },
                }}
                className="popular-content"
            >
                {filmes
                    .filter(f => f.categoria === "popular")
                    .map(filme => (
                        <SwiperSlide key={filme.id}>
                            <PopularLinha filme={filme} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    );
}
