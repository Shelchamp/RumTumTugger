class ApplicationController < ActionController::Base

  protect_from_forgery except:[:create, :destroy]

  helper_method :current_user, :logged_in?

  private

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout

    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
  end

  def require_login
  end

end
