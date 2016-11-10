class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :username
      t.string :posttype
      t.text :title
      t.text :content
      t.string :tag
      t.integer :reports
      t.integer :points
      t.integer :comments

      t.timestamps null: false
    end
  end
end
