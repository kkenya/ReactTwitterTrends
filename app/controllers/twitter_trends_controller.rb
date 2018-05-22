# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"


  def index
    trends = TwitterTrend.new
    trends.trend_titles = trends.get_trend_titles
    @twitter_trends_props = {trends: trends.trend_titles}
  end
end
