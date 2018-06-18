# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"

  def index
    trends = TwitterTrend.get_all
    @twitter_trends_props = {trends: trends}
  end

  # def show
  #   @trend = TwitterTrend.find(params[:id])
  #   @trend.tweets.build
  # end
end
