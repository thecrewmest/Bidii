require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get forgot_password" do
    get sessions_forgot_password_url
    assert_response :success
  end

  test "should get new" do
    get sessions_new_url
    assert_response :success
  end

end
