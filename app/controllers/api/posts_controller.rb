class Api::PostsController < ApplicationController


  def index
    @posts = Post.all
    render 'api/posts/index'
  end


  def create
    @post = Post.new(post_params)
    if @post.save
      render json: ['your post has been saved']
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  # def edit
  #   @post = Post.find_by
  # end

  # def show
  #   @post = Post.find_by(params[:id])
  # end

  private

  def post_params
    params.require(:post).permit(:post_type, :title, :body, :image_url)
  end

end
