# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"


  def index
    trends = TwitterTrend.new
    trends.all = trends.get_all
    @twitter_trends_props = {trends: trends.all}
  end
end
