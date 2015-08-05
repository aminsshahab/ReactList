class UsersController < ApplicationController
  def create
      user = User.new(
        username: params["username"]
        )
      user.password = params["password"]
      if user.save
        session[:user_id] = user.id
        session[:username] = user.first_name
        render json: user
      end
    end
end
