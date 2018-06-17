class TweetController < ApplicationController
  layout "twitter_trends"

  def index
    trends = TwitterTrend.get_all
    @twitter_trends_props = {trends: trends}

    tweets = Tweet.search

    respond_to do |format|
      format.html
      format.json {
        render json: tweets
      }
    end
  end

  def tweet_params
    params.require(:tweet).permit(:query)
  end
end
