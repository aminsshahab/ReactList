class SessionsController < ApplicationController

  def login
    user = User.find_by_email(params["username"])
    if user && user.password == params["password"]
      session[:user_id] = user.id
      session[:username] = user.username
      render json: user
    end
  end

  def logout
    reset_session
    message = 'logged out'
    render json: {x:message}
  end

  def show
    render json: session
  end

end
