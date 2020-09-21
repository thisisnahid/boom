class Api::SessionController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/user/show"
        else
            render json: ["Invalid username or password"], status: 401 
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/discover"
        else
            render json: ["if you see this, something went wrong"], status: 404
        end
    end
end