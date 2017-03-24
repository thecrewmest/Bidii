class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)

    # Memoization Code
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == 1 ? remember(user) : forget(user)
      flash.now[:success] = 'Welcome to Bidii'
      redirect_to dashboard_url  # redirect_to user_url(@user)
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def forgot_password
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
end
