class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['Incorrect username/password'] }, status: 422
    end
  end

  def show
    render json: {
      signed_in: signed_in?,
      current_user: signed_in? && current_user.as_json(only: [:id, :username]),
    }
  end

  def destroy
    sign_out!
    head :no_content
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
