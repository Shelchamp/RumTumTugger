class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    # debugger
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Your email and password do not match"], status: 401
    end
  end

  def destroy
    @user = current_user
    # debugger
    if @user
      logout
      render json: {}
    else
      render json: ["Can't log out if you're not signed in"], status: 404
    end
  end

end
