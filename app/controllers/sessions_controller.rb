class SessionsController < ApplicationController
  before_action :redirect_if_signed_in, only: [:new]

  def new
  end

  private

  def redirect_if_signed_in
    redirect_to root_url if signed_in?
  end
end
