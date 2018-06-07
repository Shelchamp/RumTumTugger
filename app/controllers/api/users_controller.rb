class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end

# $.ajax({
#   method: 'POST',
#   url: '/api/users',
#   data: { user: { username: 'user2',
#                   email: '1',
#                   password: '123456'
#                 }
#               }
#   })
#
# $.ajax({
#   method: 'POST',
#   url: '/api/session',
#   data: { user: { username: 'user2',
#                   password: '123456'
#                 }
#               }
#   })
