class CreateTwitterTrends < ActiveRecord::Migration[5.2]
  def change
    create_table :twitter_trends do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.integer :tweet_volume

      t.timestamps
    end
  end
end
