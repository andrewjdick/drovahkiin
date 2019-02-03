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
          {/**
           * I found the API for the monnthly price to be confusing.
           * With no obvious value I've hard coded it in for now.
           * I assume it would be something like the total cost / number of months
           **/}
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
