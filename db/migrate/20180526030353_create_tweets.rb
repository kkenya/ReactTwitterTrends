class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.references :user, foreign_key: true
      t.text :text
      t.string :user_name
      t.string :user_screen_name
      t.string :user_profile_image_url
      t.timestamps
    end
  end
end
