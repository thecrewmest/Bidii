class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @info = 'You can signup now still in Beta phase login with username: vansolo313@gmail.com and password: admin'
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :company, :password)
  end
end
