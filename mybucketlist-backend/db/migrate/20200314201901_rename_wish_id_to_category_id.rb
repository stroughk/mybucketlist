class RenameWishIdToCategoryId < ActiveRecord::Migration[6.0]
  def change
    rename_column :wishes, :wish_id, :category_id 
    add_index :wishes, :category_id
  end
end
