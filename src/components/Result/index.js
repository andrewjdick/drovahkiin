import React from "react";
import { string, shape } from "prop-types";
import resultFallbackImage from "assets/images/resultFallback.png";
import {
  ResultContainer,
  ResultWrapper,
  CarInfo,
  CarPrice,
  CarBrand,
  CarModel
} from "./styles";

export const Result = ({
  stock_image,
  year,
  vehicle_make,
  vehicle_model,
  engine_size_information
}) => (
  <ResultContainer>
    <ResultWrapper
      bgImage={
        stock_image && stock_image.image_url
          ? stock_image.image_url
          : resultFallbackImage
      }
    >
      <CarInfo>
        {/**
         * I found the API for the monthly price to be confusing.
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

Result.propTypes = {
  stock_image: shape({
    image_url: string
  }),
  year: string,
  vehicle_make: string,
  vehicle_model: string,
  engine_size_information: string
};
