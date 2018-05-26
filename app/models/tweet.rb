require('cgi')

class Tweet < ApplicationRecord
  attr_accessor :all

  def search
    request("めめめ")
  end

  private

    def request_api(query)
      uri = URI.parse("https://api.twitter.com/1.1/search/tweets.json?q=#{CGI.escape(query)}")
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.request_uri)
      req['Authorization'] = "Bearer #{ENV["BEARER_TOKEN"]}"

      https.request(req)
    end

    def request(query)
      # todo remove benchmark
      result = Benchmark.realtime do
        # if Time.zone.now.beginning_of_minute > Tweet.last.created_at
        #   trends = JSON.parse(request_api.body)[0]['trends']
        #   trends.each do |t|
        #     TwitterTrend.create!(
        #         name: t['name'],
        #         url: t['url'],
        #         tweet_volume: t['tweet_volume'],
        #     )
        #   end
        # end
        # @tweets = TwitterTrend.beginning_minute
      end
      tweets  = JSON.parse(request_api(query).body)['statuses']
      puts "trends request#{result}"
      @tweets = tweets
    end
end

