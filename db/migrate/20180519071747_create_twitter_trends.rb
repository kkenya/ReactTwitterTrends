class CreateTwitterTrends < ActiveRecord::Migration[5.2]
  def change
    create_table :twitter_trends do |t|
      t.string :name, null: false
      t.string :link, null: false

      t.timestamps
    end
  end
end
