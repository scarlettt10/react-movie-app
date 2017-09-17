class Api::MoviesController < ApplicationController
  before_action :set_movie, only: [:update, :destroy]
  
    def index
      render json: Movie.all
    end
  
    def create
      movie = Movie.new(movie_params)
      if movie.save
        render json: movie
      else
        render_error(movie)
      end
    end
  
    def update
      if @movie.update
        render json: @movie
      else
        render_error(@movie)
      end
    end
  
    def destroy
      @movie.destroy
    end
  
    private
  
      def movie_params
        params.require(:movie).permit(:title, :summary, :released)
      end
  
      def set_movie
        @movie = Movie.find(params[:id])
      end
  
      def render_error(movie)
        errors = movie.errors.full_messages.join(", ")
        render json: { errors: errors}, status: 418
      end
  
  end