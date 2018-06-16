class TwitterTrend < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true
  attr_accessor :all

  def get_all
    request
  end

  scope :latest, -> {where("created_at >= ?", Time.zone.now.beginning_of_minute).order(tweet_volume: :desc).last(50)}

  private

    def request_api
      uri = URI.parse('https://api.twitter.com/1.1/trends/place.json?id=1110809')
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.request_uri)
      req['Authorization'] = "Bearer #{ENV["BEARER_TOKEN"]}"

      https.request(req)
    end

    def request
      # todo remove benchmark
      result = Benchmark.realtime do
        if Time.zone.now.beginning_of_minute > TwitterTrend.last.created_at
          trends = JSON.parse(request_api.body)[0]['trends']
          trends.each do |t|
            TwitterTrend.create!(
                name: t['name'],
                url: t['url'],
                tweet_volume: t['tweet_volume'],
            )
          end
        end
        @trends = TwitterTrend.latest
      end
      puts "trends request#{result}"
      @trends
    end
end
