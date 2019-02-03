import React from "react";
import { string, func, number, bool } from "prop-types";
import { InputFilter, SelectFilter } from "components/filters";
import {
  VEHICLE_MAKE_OPTIONS,
  TRANSMISSION_OPTIONS,
  MAX_DISTANCE_OPTIONS
} from "components/filters/constants";
import {
  FilterWrapper,
  FiltersWrapper,
  MultiFilterLabel,
  MultiFilterWrapper,
  MultiFilterInputs
} from "./styles";

export const Filters = ({
  vehicle_make,
  price_min,
  price_max,
  transmission,
  max_distance,
  number_of_seats_min,
  number_of_seats_max,
  onFilterChange,
  isMobileNavigationOpen
}) => (
  <FiltersWrapper isMobileNavigationOpen={isMobileNavigationOpen}>
    <FilterWrapper>
      <SelectFilter
        label="Vehicle Make"
        options={VEHICLE_MAKE_OPTIONS}
        defaultValue={vehicle_make}
        onChange={event =>
          onFilterChange({
            key: "vehicle_make",
            value: event.target.value
          })
        }
      />
    </FilterWrapper>

    <MultiFilterWrapper>
      <MultiFilterLabel>Monthly budget</MultiFilterLabel>
      <MultiFilterInputs>
        <InputFilter
          id="price_min"
          label="Min"
          type="number"
          min="0"
          defaultValue={price_min}
          onInput={event =>
            onFilterChange({
              key: "price_min",
              value: Number(event.target.value)
            })
          }
        />
        <InputFilter
          id="price_max"
          label="Max"
          type="number"
          min="1"
          defaultValue={price_max}
          onInput={event =>
            onFilterChange({
              key: "price_max",
              value: Number(event.target.value)
            })
          }
        />
      </MultiFilterInputs>
    </MultiFilterWrapper>

    <FilterWrapper>
      <SelectFilter
        label="Transmission"
        options={TRANSMISSION_OPTIONS}
        defaultValue={transmission}
        onChange={event =>
          onFilterChange({
            key: "transmission",
            value: event.target.value
          })
        }
      />
    </FilterWrapper>

    <FilterWrapper>
      <SelectFilter
        label="Max Distance"
        options={MAX_DISTANCE_OPTIONS}
        defaultValue={max_distance}
        onChange={event =>
          onFilterChange({
            key: "max_distance",
            value: Number(event.target.value)
          })
        }
      />
    </FilterWrapper>

    <MultiFilterWrapper>
      <MultiFilterLabel>Number of seats</MultiFilterLabel>
      <MultiFilterInputs>
        <InputFilter
          id="number_of_seats_min"
          label="Min"
          type="number"
          min="0"
          defaultValue={number_of_seats_min}
          onInput={event =>
            onFilterChange({
              key: "number_of_seats_min",
              value: Number(event.target.value)
            })
          }
        />
        <InputFilter
          id="number_of_seats_max"
          label="Max"
          type="number"
          min="1"
          defaultValue={number_of_seats_max}
          onInput={event =>
            onFilterChange({
              key: "number_of_seats_max",
              value: Number(event.target.value)
            })
          }
        />
      </MultiFilterInputs>
    </MultiFilterWrapper>
  </FiltersWrapper>
);

Filters.propTypes = {
  vehicle_make: string,
  price_min: number,
  price_max: number,
  transmission: string,
  max_distance: number,
  number_of_seats_min: number,
  number_of_seats_max: number,
  onFilterChange: func,
  isMobileNavigationOpen: bool
};
