class Api::LikesController < ApplicationController


  def create
    debugger
    @like = Like.new()
    @like.user_id = current_user.id

  end

  
  # private

  # def like_params
  #   params.require(:like).permit()
  # end
end
