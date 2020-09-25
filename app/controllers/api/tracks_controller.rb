# class TracksController < ApplicationController
#    before_action :ensure_logged_in, only: [:edit, :create, :destroy]
   
#    def index
#     @tracks = Track.all
#     render :index
#    end

#    def show
#     @track = Track.find_by(id: params[:id])
#         if @track
#             render :show
#         else
#             render json: ["Could not locate track"], status 404
#         end
#     end

#     def create
#         @track = Track.new(track_params)
#         @track.artist_id = current_user.id

#         if @track.save
#             render :show
#         else
#             render json: @tracks.errors.full_messages, status 400
#         end
#     end

#     def update
#         @track = Track.find_by(id: params[:id])

#         if @track && @track.update(track_params)
#             render :show
#         else
#             render json: @track.errors.full_messages, status 400
#         end
#     end

#     def destroy
#         @track = Track.find_by(id: params[:id])
#         @track.destroy!
#     end

#     private
#     def track_params
#         params.require(:track).permit(:title, :description, :artist_id, :genre_id, :image_url )
#     end
# end