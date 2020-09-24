class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid email or password"], status: 401 
        end
    end

    def destroy
        if logged_in?
            logout!
            # redirect_to "/"
        else
            render json: ["if you see this, something went wrong"], status: 404
        end
    end
end