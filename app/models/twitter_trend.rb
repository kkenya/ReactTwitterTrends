class TwitterTrend < ApplicationRecord
  attr_accessor :trend_titles

  def get_trend_titles
    names = []
    trends.each do |trend|
      names.push(trend['name'])
    end
    names
  end

  private
    def get_request(dir = 'https://api.twitter.com/1.1/trends/place.json?id=1118370')
      uri = URI.parse(dir)
      https = Net::HTTP.new(uri.host, uri.port)
      https.use_ssl = true
      req = Net::HTTP::Get.new(uri.request_uri)
      req['Authorization'] = "Bearer #{ENV["BEARER_TOKEN"]}"

      https.request(req)
    end

    def trends
      JSON.parse(get_request.body)[0]['trends']
    end
end
