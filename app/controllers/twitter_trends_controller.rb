# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"

  def index
    # trends = TwitterTrend.request_api
    trends = TwitterTrend.get_all
    @twitter_trends_props = {trends: trends}
  end

  # def show
  # trends = TwitterTrend.get_all
  # @twitter_trends_props = {trends: trends}
  #
  #   @trend = TwitterTrend.find(params[:id])
  #   @trend.tweets.build
  # end
end
