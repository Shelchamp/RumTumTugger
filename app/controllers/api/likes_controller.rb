class Api::LikesController < ApplicationController

  def index
    @likes = Like.all 
    render `api/likes/index`
  end

  def create    
    @like = Like.new({user_id: current_user.id, post_id: params[:post_id]})
    
    unless @like.save!
      flash[:errors] = @like.errors.full_messages
    end

    render json: `api/likes/show`
  end

  def destroy 
    @like = Like.find_by({user_id: current_user.id, post_id: params[:post_id]})

    unless @like.destroy! 
      flash[:errors] = @like.errors.full_messages
    end

    render json: `api/likes/show`
  end

end
