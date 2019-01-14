class Api::PostsController < ApplicationController


  def index
    @posts = Post.all
    render 'api/posts/index'
  end


  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    # @post.user_id = 34
    if @post.save
      render json: 'api/posts/show'
    else
      # render json: ['wrongzo']
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: 'api/posts/show'
    else 
      render json: @post.errors.full_messages, status: 422
    end 
  end

  def show
    @post = Post.find_by(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:post_type, :title, :body, :image_url)
  end

end
