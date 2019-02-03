import React from "react";
import {
  ResultContainer,
  ResultWrapper,
  CarInfo,
  CarPrice,
  CarBrand,
  CarModel
} from "./styles";

export const Result = ({ data }) => {
  const {
    stock_image,
    year,
    vehicle_make,
    vehicle_model,
    engine_size_information
  } = data;

  const bgImage = stock_image ? stock_image.image_url : undefined;

  return (
    <ResultContainer>
      <ResultWrapper bgImage={bgImage}>
        <CarInfo>
          <CarPrice>£300</CarPrice>
          <CarPrice>a month</CarPrice>
        </CarInfo>

        <CarInfo>
          <CarBrand>
            {year} {vehicle_make}
          </CarBrand>
          <CarModel>
            {vehicle_model} - {engine_size_information}
          </CarModel>
        </CarInfo>
      </ResultWrapper>
    </ResultContainer>
  );
};
