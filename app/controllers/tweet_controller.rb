class TweetController < ApplicationController
  def show
    tweets = Tweet.new
    tweets.all = tweets.search

    respond_to do |format|
      format.html
      format.json {
        render json: tweets.all
      }
    end
  end

  def tweet_params
    params.require(:tweet).permit(:query)
  end
end
