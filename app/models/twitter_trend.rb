class TwitterTrend < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true
  attr_accessor :all

  def get_trends
    request
  end

  def get_trend_titles
    names = []
    request.each do |trend|
      names.push(trend['name'])
    end
    names
  end

  scope :beginning_minute, -> {where("created_at >= ?", Time.zone.now.beginning_of_minute).order(tweet_volume: :desc).last(50)}

  private

    def get_request
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
          trends = JSON.parse(get_request.body)[0]['trends']
          trends.each do |t|
            TwitterTrend.create!(
                name: t['name'],
                url: t['url'],
                tweet_volume: t['tweet_volume'],
            )
          end
        end
        @trends = TwitterTrend.beginning_minute
      end
      puts result
      @trends
    end
end
