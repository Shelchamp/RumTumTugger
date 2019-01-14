class Api::LikesController < ApplicationController


  def create
    @like = Like.new
    @like.user_id = current_user.id
    # Where do we get the post id from?
    # @like.post_id = 

    unless @post.save
      flash[:errors] = @like.errors.full_messages
    end



  end

  
  # private

  # def like_params
  #   params.require(:like).permit()
  # end
end
