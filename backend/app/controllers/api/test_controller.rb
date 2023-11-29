module Api
    class TestController < ApplicationController
        def test
            render json: ["This message came from backend"] 
        end
    end
end