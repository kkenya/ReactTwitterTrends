class Tweet < ApplicationRecord
  belongs_to :user
  validates :query, presence: true

  class << self
    def request_api(query)
      q = CGI.escape(query)
   # ?count=#{count}"   # count = CGI.escape(50)
      uri = URI.parse("https://api.twitter.com/1.1/search/tweets.json?q=#{q}")
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.request_uri)
      req['Authorization'] = "Bearer #{ENV["BEARER_TOKEN"]}"

      response_body = https.request(req).body
      JSON.parse(response_body)
    end

    def search(query)
      # todo remove benchmark
      result = Benchmark.realtime do
        # # 保存された最後のトレンドが1分前ならトレンドを取得し更新する
        # if !TwitterTrend.last || Time.zone.now.beginning_of_minute > TwitterTrend.last.updated_at
        #   json = request_api['statuses']
        #   json.each do |t|
        #     TwitterTrend.create!(
        #         name: t['name'],
        #         url: t['url'],
        #         tweet_volume: t['tweet_volume']
        #     )
        #   end
        # end
        # TwitterTrend.latest
      end
      puts "trends request#{result}"
      request_api(query)['statuses']
    end
  end
end
