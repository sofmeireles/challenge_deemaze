module Api
    class SpecialitiesController < ApplicationController

        def create
            @speciality = Speciality.new(speciality_params)

            if @speciality.save
                render json: @speciality, status: :created
            else
                render json: { errors: @speciality.errors.full_messages }, status: :unprocessable_entity
            end

        end

        private

        def speciality_params
            params.require(:speciality).permit(:date, :restaurant,  specialities: [])
        end

    end
end