class AddIndexTwitterTrendTweetVolume < ActiveRecord::Migration[5.2]
  def change
    add_index :twitter_trends, :tweet_volume
  end
end
