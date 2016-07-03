class Api::ListsController < ApplicationController
  before_action :require_sign_in!, only: [:create]

  def index
    @lists = current_user.lists
  end

  def create
    @list = current_user.lists.new(list_params)

    if @list.save
      render :show
    else
      render status: 422, json: { errors: @list.errors.full_messages }
    end
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end
