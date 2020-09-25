require 'test_helper'

class GenresControllerTest < ActionDispatch::IntegrationTest
  test "should get genre:string" do
    get genres_genre:string_url
    assert_response :success
  end

end
