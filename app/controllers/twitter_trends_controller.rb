# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"


  def index
    trends = TwitterTrend.new
    tweets = Tweet.new
    trends.all = trends.get
    tweets.all = tweets.search
    @twitter_trends_props = {trends: trends.all, tweets: tweets.all}
  end
end
