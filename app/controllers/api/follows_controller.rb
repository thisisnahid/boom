class Api::FollowsController < ApplicationController 
    before_action :ensure_logged_in

    def create
        @user = current_user
        @follow = @user.outgoing_follows.create!(artist_id: params[:artist_id])
        render 'api/users/show'
    end

    def destroy
        @user = current_user
        @follow = @user.outgoing_follows.find_by(artist_id: params[:artist_id])
        if @follow
            @follow.destroy!
            render 'api/users/show'
        else
            render json: ["Unfollow error"], status: 422
        end
    end
end
