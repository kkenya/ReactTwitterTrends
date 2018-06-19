class TweetsController < ApplicationController
  layout "twitter_trends"

  def index
    trends = TwitterTrend.get_all
    @twitter_trends_props = {trends: trends}
  end

  def create
    tweets = Tweet.search(tweet_params[:trend_name])

    respond_to do |format|
      format.html
      format.json {
        render json: tweets
      }
    end
  end

  def tweet_params
    params.require(:tweet).permit(:trend_name)
  end
end
