class CreateWishes < ActiveRecord::Migration[6.0]
  def change
    create_table :wishes do |t|
      t.integer :wish_id
      t.string :content
      t.boolean :fulfilled
      t.timestamps
    end
  end
end
