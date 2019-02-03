import React from "react";
import { InputFilter, SelectFilter } from "components/Filter";
import {
  VEHICLE_MAKE_OPTIONS,
  TRANSMISSION_OPTIONS,
  MAX_DISTANCE_OPTIONS
} from "components/Filter/constants";
import {
  FilterWrapper,
  FiltersWrapper,
  MultiFilterLabel,
  MultiFilterWrapper,
  MultiFilterInputs
} from "./styles";

export const Filters = ({ data, onFilterChange }) => (
  <FiltersWrapper>
    <FilterWrapper>
      <SelectFilter
        label="Vehicle Make"
        options={VEHICLE_MAKE_OPTIONS}
        selected={data.vehicle_make}
        onChange={event =>
          onFilterChange({ key: "vehicle_make", value: event.target.value })
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
          defaultValue={data.price_min}
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
          defaultValue={data.price_max}
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
        selected={data.transmission}
        onChange={event =>
          onFilterChange({ key: "transmission", value: event.target.value })
        }
      />
    </FilterWrapper>

    <FilterWrapper>
      <SelectFilter
        label="Max Distance"
        options={MAX_DISTANCE_OPTIONS}
        selected={data.max_distance}
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
          defaultValue={data.number_of_seats_min}
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
          defaultValue={data.number_of_seats_max}
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
