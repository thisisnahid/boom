class GenresController < ApplicationController

    def show
        @genre = Genre.find_by(id: params[:id])
        render :show
    end

    # private
    # def genre_params
    #     params.require(:genre).permit(:genre)
    # end
end