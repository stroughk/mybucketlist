class Api::V1::WishesController < ApplicationController

    before_action :set_category

    def index
        @wishes = Wish.all 
        render json: @wishes
    end

    def create
        @wish = @category.wishes.new(wish_params)
        if @wish.save
            render json: @wish
        else
            render json: {error: 'Sorry, please try again'}
        end
    end

    def show
      @wish = Wish.find(params[:id])
      render json: @wish 
    end

    def destroy
        @wish = Wish.find(params[:id])
        @wish.destroy
    end

    private

    def set_category
        @category = Category.find(params[:category_id]) #any wish we have it's associated with a category, and we set it based on the category id
    end

    def wish_params
        params.require(:wish).permit(:category_id, :content, :fulfilled)
    end
end
