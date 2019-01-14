class Api::LikesController < ApplicationController

  def index
    @likes = Like.all 
    render `api/likes/index`
  end

  def create
    # @like = Like.new({user_id: current_user.id, post_id: params[:post_id]})
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:post_id]
    # Where do we get the post id from?
    # @like.post_id = 

    unless @post.save!
      flash[:errors] = @like.errors.full_messages
    end

    render json: `api/likes/show`


  end

  
  # private

  # def like_params
  #   params.require(:like).permit()
  # end
end
