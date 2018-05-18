# frozen_string_literal: true

class TwitterTrendsController < ApplicationController
  layout "twitter_trends"

  def index
    @twitter_trends_props = { name: "Stranger" }
  end
end
