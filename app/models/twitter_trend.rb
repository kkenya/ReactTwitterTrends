class TwitterTrend < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true
  scope :latest, -> {where("updated_at >= ?", Time.zone.now.beginning_of_minute).order(tweet_volume: :desc).last(50)}

  class << self
    def request_api
      uri = URI.parse('https://api.twitter.com/1.1/trends/place.json?id=1110809')
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.request_uri)
      req['Authorization'] = "Bearer #{ENV["BEARER_TOKEN"]}"

      response_body = https.request(req).body
      JSON.parse(response_body)
    end

    # todo controllerでcreate
    def get_all
      # 保存された最後のトレンドが1分前ならトレンドを取得し更新する
      if !TwitterTrend.last || Time.zone.now.beginning_of_minute > TwitterTrend.last.updated_at
        json = request_api[0]['trends']
        json.each do |t|
          TwitterTrend.create!(
              name: t['name'],
              url: t['url'],
              tweet_volume: t['tweet_volume']
          )
        end
      end
      TwitterTrend.latest
    end
  end
end
